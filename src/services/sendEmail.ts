import emailjs from '@emailjs/browser'

interface EmailData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export async function sendEmail(emailData: EmailData) {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID

    if (!serviceId || !templateId || !userId) {
      throw new Error('Missing EmailJS environment variables')
    }

    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      phone: emailData.phone || 'Não informado',
      company: emailData.company || 'Não informado',
      message: emailData.message,
      to_name: 'Equipe CRSET AGI Commander',
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    )

    console.log('Email enviado com sucesso:', response)
    return response
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    throw new Error(`Erro ao enviar email: ${error}`)
  }
}