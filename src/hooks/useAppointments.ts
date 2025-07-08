import { useState, useEffect } from 'react';
import { supabase, Appointment } from '../lib/supabase';
import toast from 'react-hot-toast';

export const useAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          patients (
            id,
            name,
            phone,
            email
          )
        `)
        .order('appointment_date', { ascending: true });

      if (error) throw error;
      setAppointments(data || []);
    } catch (error: any) {
      toast.error('অ্যাপয়েন্টমেন্ট লোড করতে সমস্যা হয়েছে');
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const createAppointment = async (appointmentData: Omit<Appointment, 'id' | 'created_at' | 'updated_at' | 'token_number'>) => {
    try {
      // Generate token number
      const tokenNumber = `T-${Date.now().toString().slice(-6)}`;
      
      const { data, error } = await supabase
        .from('appointments')
        .insert([{ ...appointmentData, token_number: tokenNumber }])
        .select()
        .single();

      if (error) throw error;
      setAppointments(prev => [...prev, data]);
      toast.success('অ্যাপয়েন্টমেন্ট সফলভাবে বুক হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('অ্যাপয়েন্টমেন্ট বুক করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  const updateAppointment = async (id: string, updates: Partial<Appointment>) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setAppointments(prev => prev.map(a => a.id === id ? data : a));
      toast.success('অ্যাপয়েন্টমেন্ট আপডেট হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('অ্যাপয়েন্টমেন্ট আপডেট করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  const cancelAppointment = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .update({ status: 'cancelled', updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setAppointments(prev => prev.map(a => a.id === id ? data : a));
      toast.success('অ্যাপয়েন্টমেন্ট বাতিল হয়েছে');
    } catch (error: any) {
      toast.error('অ্যাপয়েন্টমেন্ট বাতিল করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return {
    appointments,
    loading,
    createAppointment,
    updateAppointment,
    cancelAppointment,
    refetch: fetchAppointments
  };
};