import { useState, useEffect } from 'react';
import { supabase, Prescription } from '../lib/supabase';
import toast from 'react-hot-toast';

export const usePrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPrescriptions = async () => {
    try {
      const { data, error } = await supabase
        .from('prescriptions')
        .select(`
          *,
          patients (
            id,
            name,
            phone,
            email
          ),
          appointments (
            id,
            appointment_date,
            type
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPrescriptions(data || []);
    } catch (error: any) {
      toast.error('প্রেসক্রিপশন লোড করতে সমস্যা হয়েছে');
      console.error('Error fetching prescriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  const createPrescription = async (prescriptionData: Omit<Prescription, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('prescriptions')
        .insert([prescriptionData])
        .select()
        .single();

      if (error) throw error;
      setPrescriptions(prev => [data, ...prev]);
      toast.success('প্রেসক্রিপশন সফলভাবে তৈরি হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('প্রেসক্রিপশন তৈরি করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  const updatePrescription = async (id: string, updates: Partial<Prescription>) => {
    try {
      const { data, error } = await supabase
        .from('prescriptions')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setPrescriptions(prev => prev.map(p => p.id === id ? data : p));
      toast.success('প্রেসক্রিপশন আপডেট হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('প্রেসক্রিপশন আপডেট করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  const generatePrescriptionPDF = async (prescriptionId: string) => {
    try {
      // This would integrate with a PDF generation service
      toast.success('প্রেসক্রিপশন PDF তৈরি হচ্ছে...');
      // Implementation would go here
    } catch (error: any) {
      toast.error('PDF তৈরি করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  return {
    prescriptions,
    loading,
    createPrescription,
    updatePrescription,
    generatePrescriptionPDF,
    refetch: fetchPrescriptions
  };
};