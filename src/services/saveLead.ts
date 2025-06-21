import { supabase, Lead } from './supabase'

export async function saveLead(leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          ...leadData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Erro ao salvar lead:', error)
      throw new Error(`Erro ao salvar lead: ${error.message}`)
    }

    console.log('Lead salvo com sucesso:', data)
    return data[0]
  } catch (error) {
    console.error('Erro inesperado ao salvar lead:', error)
    throw error
  }
}