import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  address: string;
  medical_history: string;
  created_at: string;
  updated_at: string;
}

export interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  appointment_date: string;
  appointment_time: string;
  type: 'chamber' | 'video' | 'home';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  problem_description: string;
  token_number: string;
  created_at: string;
  updated_at: string;
}

export interface Prescription {
  id: string;
  patient_id: string;
  doctor_id: string;
  appointment_id: string;
  diagnosis: string;
  medicines: Medicine[];
  instructions: string;
  follow_up_date: string;
  status: 'active' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  original_price: number;
  description: string;
  in_stock: boolean;
  stock_quantity: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  patient_id: string;
  items: OrderItem[];
  total_amount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  delivery_address: string;
  payment_method: string;
  payment_status: 'pending' | 'completed' | 'failed';
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  medicine_id: string;
  quantity: number;
  price: number;
}

export interface Doctor {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  qualifications: string[];
  experience_years: number;
  license_number: string;
  registration_number: string;
  chamber_address: string;
  consultation_fee: number;
  created_at: string;
  updated_at: string;
}