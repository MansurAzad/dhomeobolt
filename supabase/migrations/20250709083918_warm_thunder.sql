/*
  # Create patients table

  1. New Tables
    - `patients`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique)
      - `phone` (text)
      - `date_of_birth` (date)
      - `gender` (text)
      - `address` (text)
      - `medical_history` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `patients` table
    - Add policies for authenticated users to manage patient data
*/

CREATE TABLE IF NOT EXISTS patients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE,
  phone text,
  date_of_birth date,
  gender text,
  address text,
  medical_history text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read patients"
  ON patients
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert patients"
  ON patients
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update patients"
  ON patients
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete patients"
  ON patients
  FOR DELETE
  TO authenticated
  USING (true);