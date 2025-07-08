/*
  # Initial Schema for Homeopathic Healthcare Management System

  1. New Tables
    - `doctors` - Doctor information and credentials
    - `patients` - Patient profiles and medical history
    - `appointments` - Appointment scheduling and management
    - `prescriptions` - Digital prescriptions with medicines
    - `medicines` - Medicine catalog and inventory
    - `orders` - Pharmacy orders and delivery tracking
    - `order_items` - Individual items in orders
    - `medical_records` - Patient medical history and reports
    - `notifications` - System notifications for users

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Separate access for doctors and patients
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  specialization text NOT NULL,
  qualifications text[] DEFAULT '{}',
  experience_years integer DEFAULT 0,
  license_number text UNIQUE NOT NULL,
  registration_number text UNIQUE NOT NULL,
  chamber_address text NOT NULL,
  consultation_fee numeric(10,2) DEFAULT 500.00,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Patients table
CREATE TABLE IF NOT EXISTS patients (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text,
  phone text NOT NULL,
  date_of_birth date,
  gender text CHECK (gender IN ('male', 'female', 'other')),
  address text,
  emergency_contact text,
  medical_history text DEFAULT '',
  allergies text DEFAULT '',
  current_medications text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE NOT NULL,
  doctor_id uuid REFERENCES doctors(id) ON DELETE CASCADE NOT NULL,
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  type text CHECK (type IN ('chamber', 'video', 'home')) DEFAULT 'chamber',
  status text CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')) DEFAULT 'pending',
  problem_description text,
  token_number text UNIQUE NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Medicines table
CREATE TABLE IF NOT EXISTS medicines (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  category text NOT NULL,
  brand text NOT NULL,
  price numeric(10,2) NOT NULL,
  original_price numeric(10,2) NOT NULL,
  description text,
  dosage text,
  side_effects text,
  contraindications text,
  in_stock boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  minimum_stock integer DEFAULT 10,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Prescriptions table
CREATE TABLE IF NOT EXISTS prescriptions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE NOT NULL,
  doctor_id uuid REFERENCES doctors(id) ON DELETE CASCADE NOT NULL,
  appointment_id uuid REFERENCES appointments(id) ON DELETE CASCADE,
  diagnosis text NOT NULL,
  medicines jsonb DEFAULT '[]',
  instructions text,
  follow_up_date date,
  status text CHECK (status IN ('active', 'completed')) DEFAULT 'active',
  pdf_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE NOT NULL,
  total_amount numeric(10,2) NOT NULL,
  status text CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')) DEFAULT 'pending',
  delivery_address text NOT NULL,
  delivery_phone text NOT NULL,
  payment_method text CHECK (payment_method IN ('cash', 'bkash', 'nagad', 'card')) DEFAULT 'cash',
  payment_status text CHECK (payment_status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
  delivery_fee numeric(10,2) DEFAULT 50.00,
  estimated_delivery date,
  tracking_number text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  medicine_id uuid REFERENCES medicines(id) ON DELETE CASCADE NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price numeric(10,2) NOT NULL,
  total_price numeric(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Medical records table
CREATE TABLE IF NOT EXISTS medical_records (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE NOT NULL,
  doctor_id uuid REFERENCES doctors(id) ON DELETE CASCADE NOT NULL,
  appointment_id uuid REFERENCES appointments(id) ON DELETE CASCADE,
  record_type text CHECK (record_type IN ('consultation', 'test_result', 'report', 'note')) DEFAULT 'consultation',
  title text NOT NULL,
  content text NOT NULL,
  file_url text,
  is_confidential boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  type text CHECK (type IN ('appointment', 'prescription', 'order', 'reminder', 'system')) DEFAULT 'system',
  is_read boolean DEFAULT false,
  action_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE medicines ENABLE ROW LEVEL SECURITY;
ALTER TABLE prescriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Policies for doctors
CREATE POLICY "Doctors can read own profile" ON doctors
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Doctors can update own profile" ON doctors
  FOR UPDATE USING (auth.uid() = user_id);

-- Policies for patients
CREATE POLICY "Patients can read own profile" ON patients
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Patients can update own profile" ON patients
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Patients can insert own profile" ON patients
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policies for appointments
CREATE POLICY "Users can read own appointments" ON appointments
  FOR SELECT USING (
    patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()) OR
    doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())
  );

CREATE POLICY "Patients can create appointments" ON appointments
  FOR INSERT WITH CHECK (
    patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid())
  );

CREATE POLICY "Doctors can update appointments" ON appointments
  FOR UPDATE USING (
    doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())
  );

-- Policies for medicines (public read)
CREATE POLICY "Anyone can read medicines" ON medicines
  FOR SELECT TO authenticated USING (true);

-- Policies for prescriptions
CREATE POLICY "Users can read own prescriptions" ON prescriptions
  FOR SELECT USING (
    patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()) OR
    doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())
  );

CREATE POLICY "Doctors can create prescriptions" ON prescriptions
  FOR INSERT WITH CHECK (
    doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())
  );

CREATE POLICY "Doctors can update prescriptions" ON prescriptions
  FOR UPDATE USING (
    doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())
  );

-- Policies for orders
CREATE POLICY "Patients can read own orders" ON orders
  FOR SELECT USING (
    patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid())
  );

CREATE POLICY "Patients can create orders" ON orders
  FOR INSERT WITH CHECK (
    patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid())
  );

-- Policies for order items
CREATE POLICY "Users can read order items for own orders" ON order_items
  FOR SELECT USING (
    order_id IN (
      SELECT id FROM orders WHERE patient_id IN (
        SELECT id FROM patients WHERE user_id = auth.uid()
      )
    )
  );

-- Policies for medical records
CREATE POLICY "Users can read own medical records" ON medical_records
  FOR SELECT USING (
    patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()) OR
    doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())
  );

CREATE POLICY "Doctors can create medical records" ON medical_records
  FOR INSERT WITH CHECK (
    doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())
  );

-- Policies for notifications
CREATE POLICY "Users can read own notifications" ON notifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications" ON notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- Insert sample data (without foreign key references to auth.users)
INSERT INTO doctors (name, email, phone, specialization, qualifications, experience_years, license_number, registration_number, chamber_address) VALUES
('ডাঃ মোহাম্মদ আলী', 'doctor@homeocare.com', '+8801XXXXXXXXX', 'Homeopathy', ARRAY['DHMS', 'BHMS', 'MD (Homeopathy)'], 20, 'DHMS-54321', 'BMDC-12345', '১২৩ মেইন রোড, ঢাকা - ১২০০');

INSERT INTO medicines (name, category, brand, price, original_price, description, stock_quantity, image_url) VALUES
('Arsenicum Album 30', 'acute', 'Hahnemann', 120, 140, 'গ্যাস্ট্রিক, ডায়রিয়া এবং অস্থিরতার জন্য', 50, 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Nux Vomica 200', 'chronic', 'Reckeweg', 150, 180, 'বদহজম, কোষ্ঠকাঠিন্য এবং অ্যাসিডিটির জন্য', 30, 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Chamomilla 30', 'children', 'SBL', 110, 130, 'শিশুদের দাঁত ওঠা এবং কান্নাকাটির জন্য', 25, 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Sepia 200', 'women', 'Hahnemann', 165, 190, 'নারীদের হরমোনাল সমস্যা এবং মানসিক অবসাদ', 0, 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Sulphur 30', 'skin', 'Reckeweg', 135, 155, 'চর্মরোগ, একজিমা এবং চুলকানির জন্য', 40, 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'),
('Lycopodium 200', 'chronic', 'SBL', 145, 170, 'লিভার, কিডনি এবং হজমের সমস্যার জন্য', 35, 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_patient ON appointments(patient_id);
CREATE INDEX IF NOT EXISTS idx_appointments_doctor ON appointments(doctor_id);
CREATE INDEX IF NOT EXISTS idx_prescriptions_patient ON prescriptions(patient_id);
CREATE INDEX IF NOT EXISTS idx_orders_patient ON orders(patient_id);
CREATE INDEX IF NOT EXISTS idx_medicines_category ON medicines(category);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);