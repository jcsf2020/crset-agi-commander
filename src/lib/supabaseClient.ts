import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fmwhlobiydcqkkonpqta.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd2hsb2JpeWRjcWtrb25wcXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNzAxMDQsImV4cCI6MjAyMDY0NjEwNH0.Vz8B0ppub4T1xgJKxmgGkYSE9UufT7Ww_TQMGbZZv7U';

export const supabase = createClient(supabaseUrl, supabaseKey);
