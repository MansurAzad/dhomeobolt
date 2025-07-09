/*
  # Create additional tables for complete healthcare system

  1. New Tables
    - `doctors`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique)
      - `phone` (text)
      - `specialization` (text)
      - `qualifications` (jsonb array)
      - `experience_years` (integer)
      - `license_number` (text)
      - `registration_number` (text)
      - `chamber_address` (text)
      - `consultation_fee` (numeric)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `medicines`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `category` (text)
      - `brand` (text)
      - `price` (numeric)
      - `original_price` (numeric)
      - `description` (text)
      - `in_stock` (boolean)
      - `stock_quantity` (integer)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `prescriptions`
      - `id` (uuid, primary key)
      - `patient_id` (uuid, foreign key)
      - `doctor_id` (uuid, foreign key)
      - `appointment_id` (uuid, foreign key)
      - `diagnosis` (text)
      - `medicines` (jsonb array)
      - `instructions` (text)
      - `follow_up_date` (date)
      - `status` (text, enum)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `orders`
      - `id` (uuid, primary key)
      - `patient_id` (uuid, foreign key)
      - `items` (jsonb array)
      - `total_amount` (numeric)
      - `status` (text, enum)
      - `delivery_address` (text)
      - `payment_method` (text)
      - `payment_status` (text, enum)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
*/

-- Doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE,
  phone text,
  specialization text DEFAULT '',
  qualifications jsonb DEFAULT '[]'::jsonb,
  experience_years integer DEFAULT 0,
  license_number text,
  registration_number text,
  chamber_address text DEFAULT '',
  consultation_fee numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read doctors"
  ON doctors FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert doctors"
  ON doctors FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update doctors"
  ON doctors FOR UPDATE TO authenticated USING (true);

-- Medicines table
CREATE TABLE IF NOT EXISTS medicines (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text DEFAULT '',
  brand text DEFAULT '',
  price numeric DEFAULT 0,
  original_price numeric DEFAULT 0,
  description text DEFAULT '',
  in_stock boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE medicines ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read medicines"
  ON medicines FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert medicines"
  ON medicines FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update medicines"
  ON medicines FOR UPDATE TO authenticated USING (true);

-- Prescriptions table
CREATE TABLE IF NOT EXISTS prescriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE,
  doctor_id uuid REFERENCES doctors(id) ON DELETE SET NULL,
  appointment_id uuid REFERENCES appointments(id) ON DELETE SET NULL,
  diagnosis text DEFAULT '',
  medicines jsonb DEFAULT '[]'::jsonb,
  instructions text DEFAULT '',
  follow_up_date date,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE prescriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read prescriptions"
  ON prescriptions FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert prescriptions"
  ON prescriptions FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update prescriptions"
  ON prescriptions FOR UPDATE TO authenticated USING (true);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE,
  items jsonb DEFAULT '[]'::jsonb,
  total_amount numeric DEFAULT 0,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  delivery_address text DEFAULT '',
  payment_method text DEFAULT '',
  payment_status text NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read orders"
  ON orders FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert orders"
  ON orders FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update orders"
  ON orders FOR UPDATE TO authenticated USING (true);