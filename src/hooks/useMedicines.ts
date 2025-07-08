import { useState, useEffect } from 'react';
import { supabase, Medicine } from '../lib/supabase';
import toast from 'react-hot-toast';

export const useMedicines = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMedicines = async () => {
    try {
      const { data, error } = await supabase
        .from('medicines')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setMedicines(data || []);
    } catch (error: any) {
      toast.error('ওষুধের তথ্য লোড করতে সমস্যা হয়েছে');
      console.error('Error fetching medicines:', error);
    } finally {
      setLoading(false);
    }
  };

  const createMedicine = async (medicineData: Omit<Medicine, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('medicines')
        .insert([medicineData])
        .select()
        .single();

      if (error) throw error;
      setMedicines(prev => [...prev, data]);
      toast.success('ওষুধ সফলভাবে যোগ করা হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('ওষুধ যোগ করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  const updateMedicine = async (id: string, updates: Partial<Medicine>) => {
    try {
      const { data, error } = await supabase
        .from('medicines')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setMedicines(prev => prev.map(m => m.id === id ? data : m));
      toast.success('ওষুধের তথ্য আপডেট হয়েছে');
      return data;
    } catch (error: any) {
      toast.error('ওষুধের তথ্য আপডেট করতে সমস্যা হয়েছে');
      throw error;
    }
  };

  const deleteMedicine = async (id: string) => {
    try {
      const { error } = await supabase
        .from('medicines')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setMedicines(prev => prev.filter(m => m.id !== id));
      toast.success('ওষুধ মুছে ফেলা হয়েছে');
    } catch (error: any) {
      toast.error('ওষুধ মুছতে সমস্যা হয়েছে');
      throw error;
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  return {
    medicines,
    loading,
    createMedicine,
    updateMedicine,
    deleteMedicine,
    refetch: fetchMedicines
  };
};