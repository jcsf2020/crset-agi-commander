import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Tipos para a tabela de leads
export interface Lead {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  created_at?: string
  updated_at?: string
}