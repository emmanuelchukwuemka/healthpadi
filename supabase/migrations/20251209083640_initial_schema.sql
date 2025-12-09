-- Migration script for HealthPadi initial schema
-- Create date: 2025-12-09

-- Create users table (extension of Supabase auth.users)
CREATE TABLE users (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create profiles table for user profile information
CREATE TABLE profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    updated_at TIMESTAMP WITH TIME ZONE,
    full_name TEXT,
    first_name TEXT,
    last_name TEXT,
    age INTEGER,
    gender TEXT CHECK (gender IN ('male', 'female', 'other')),
    blood_group TEXT CHECK (blood_group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    chronic_conditions TEXT,
    avatar_url TEXT,
    CONSTRAINT username_length CHECK (char_length(full_name) >= 3)
);

-- Create doctors table for healthcare provider information
CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    hospital TEXT,
    experience INTEGER,
    rating NUMERIC(3,2),
    available_today BOOLEAN DEFAULT FALSE,
    photo_url TEXT,
    bio TEXT,
    specialties TEXT[],
    languages TEXT[] DEFAULT ARRAY['English']
);

-- Create symptom conversations table for storing symptom checker interactions
CREATE TABLE symptom_conversations (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    conversation JSONB,
    summary TEXT,
    urgency_level TEXT CHECK (urgency_level IN ('Low', 'Moderate', 'High'))
);

-- Create health records table for storing various health information
CREATE TABLE health_records (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    title TEXT,
    description TEXT,
    record_type TEXT CHECK (record_type IN ('symptom_check', 'appointment', 'medication', 'allergy', 'vaccination', 'lab_result', 'doctor_note')),
    data JSONB,
    attachments TEXT[]
);

-- Create appointments table for managing bookings
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    doctor_id INTEGER REFERENCES doctors(id),
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'confirmed', 'completed', 'cancelled', 'rescheduled')),
    notes TEXT,
    is_virtual BOOLEAN DEFAULT FALSE
);

-- Enable Row Level Security (RLS) for all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE symptom_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone." ON profiles
    FOR SELECT USING (TRUE);

CREATE POLICY "Users can insert their own profile." ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Doctors policies
CREATE POLICY "Everyone can view doctors." ON doctors
    FOR SELECT USING (TRUE);

-- Symptom conversations policies
CREATE POLICY "Users can view their own conversations." ON symptom_conversations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own conversations." ON symptom_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Health records policies
CREATE POLICY "Users can view their own health records." ON health_records
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own health records." ON health_records
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Appointments policies
CREATE POLICY "Users can view their own appointments." ON appointments
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own appointments." ON appointments
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX idx_profiles_user_id ON profiles(id);
CREATE INDEX idx_doctors_name ON doctors(name);
CREATE INDEX idx_doctors_specialty ON doctors USING GIN(specialties);
CREATE INDEX idx_symptom_conversations_user_id ON symptom_conversations(user_id);
CREATE INDEX idx_health_records_user_id ON health_records(user_id);
CREATE INDEX idx_appointments_user_id ON appointments(user_id);
CREATE INDEX idx_appointments_doctor_id ON appointments(doctor_id);
CREATE INDEX idx_appointments_date ON appointments(appointment_date);

-- Insert sample doctors data
INSERT INTO doctors (name, title, hospital, experience, rating, available_today, bio, specialties) VALUES
('Dr. Adebayo', 'Cardiologist', 'Lagos University Teaching Hospital', 12, 4.8, TRUE, 'Specialist in heart conditions with over a decade of experience.', ARRAY['cardiology', 'heart disease']),
('Dr. Okonkwo', 'Pediatrician', 'General Hospital Ikeja', 8, 4.9, FALSE, 'Expert in children health and development.', ARRAY['pediatrics', 'child development']),
('Dr. Adeyemi', 'Dermatologist', 'Premium Medical Centre', 15, 4.7, TRUE, 'Skin specialist with expertise in cosmetic dermatology.', ARRAY['dermatology', 'cosmetic surgery']),
('Dr. Okafor', 'Orthopedic Surgeon', 'Faith Hospital', 10, 4.6, TRUE, 'Bone and joint specialist with focus on sports injuries.', ARRAY['orthopedics', 'sports medicine']);