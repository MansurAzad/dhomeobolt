import { useState, useEffect } from 'react';
import { supabase, Patient } from '../lib/supabase';
import toast from 'react-hot-toast';

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPatients = async () => {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPatients(data || []);
    } catch (error: any) {
      toast.error('রোগীদের তথ্য লোড করতে সমস্যা হয়েছে');
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const createPatient = async (patientData: Omit<Patient, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('patients')
        .insert([patientData])
        .select()
        .single();

      if (error) throw error;
      setPatients(prev => [data, ...prev]);
      toast.success('রোগীর তথ্য সফলভাবে সংরক্ষিত হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('রোগীর তথ্য সংরক্ষণে সমস্যা হয়েছে');
      throw error;
    }
  };

  const updatePatient = async (id: string, updates: Partial<Patient>) => {
    try {
      const { data, error } = await supabase
        .from('patients')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setPatients(prev => prev.map(p => p.id === id ? data : p));
      toast.success('রোগীর তথ্য আপডেট হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('রোগীর তথ্য আপডেট করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  const deletePatient = async (id: string) => {
    try {
      const { error } = await supabase
        .from('patients')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setPatients(prev => prev.filter(p => p.id !== id));
      toast.success('রোগীর তথ্য মুছে ফেলা হয়েছে');
    } catch (error: any) {
      toast.error('রোগীর তথ্য মুছতে সমস্যা হয়েছে');
      throw error;
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return {
    patients,
    loading,
    createPatient,
    updatePatient,
    deletePatient,
    refetch: fetchPatients
  };
};