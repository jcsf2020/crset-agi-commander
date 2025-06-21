import React, { useState } from 'react'
import { saveLead } from '../services/saveLead'
import { sendEmail } from '../services/sendEmail'
import './ContactForm.css'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface ContactFormProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      const errorMsg = 'Por favor, preencha todos os campos obrigatórios'
      setSubmitStatus('error')
      onError?.(errorMsg)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // 1. Salvar lead na base de dados Supabase
      await saveLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        message: formData.message
      })

      // 2. Enviar email via EmailJS
      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message
      })

      // Sucesso - limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
      
      setSubmitStatus('success')
      onSuccess?.()
      
    } catch (error) {
      console.error('Erro ao processar formulário:', error)
      const errorMsg = error instanceof Error ? error.message : 'Erro inesperado ao enviar formulário'
      setSubmitStatus('error')
      onError?.(errorMsg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            placeholder="Seu nome completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="(11) 99999-9999"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="Nome da sua empresa"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            rows={5}
            placeholder="Descreva como podemos ajudá-lo..."
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {submitStatus === 'success' && (
          <div className="status-message success">
            ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            ❌ Erro ao enviar mensagem. Tente novamente.
          </div>
        )}
      </form>


    </div>
  )
}

export default ContactForm