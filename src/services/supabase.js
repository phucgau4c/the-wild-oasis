import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://hwjvippsmujhgrokemcm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3anZpcHBzbXVqaGdyb2tlbWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMjM0MjMsImV4cCI6MjAyMDg5OTQyM30.GSW_EMoOpqjuGkSRSbFt6Zb20xd_8WLo-u0MWRzPlfA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
