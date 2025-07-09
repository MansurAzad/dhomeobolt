/*
  # Create appointments table with patient relationship

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `patient_id` (uuid, foreign key to patients)
      - `doctor_id` (text)
      - `appointment_date` (date, required)
      - `appointment_time` (text, required)
      - `type` (text, enum: chamber/video/home)
      - `status` (text, enum: pending/confirmed/completed/cancelled)
      - `problem_description` (text)
      - `token_number` (text, unique)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `appointments` table
    - Add policies for authenticated users to manage appointments

  3. Relationships
    - Foreign key relationship between appointments.patient_id and patients.id
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id uuid REFERENCES patients(id) ON DELETE CASCADE,
  doctor_id text,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  type text NOT NULL DEFAULT 'chamber' CHECK (type IN ('chamber', 'video', 'home')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  problem_description text DEFAULT '',
  token_number text UNIQUE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert appointments"
  ON appointments
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete appointments"
  ON appointments
  FOR DELETE
  TO authenticated
  USING (true);