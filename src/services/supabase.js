import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://zoewbqzdgqnlhklcnlkl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvZXdicXpkZ3FubGhrbGNubGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNzAxMzEsImV4cCI6MjA0OTY0NjEzMX0.3rsz4KXtZut0D8xPUk4UOQ0WkX6YpKwWeCVbstRWA-A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
