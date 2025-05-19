import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  const { nome, email, empresa, mensagem } = JSON.parse(event.body || '{}')

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      origin: 'http://localhost'
    },
    body: JSON.stringify({
      service_id: 'service_us4jjnk',
      template_id: 'lead_reply_crset',

      user_id: '7R0HNDeWf4W5I1lUxJ',
      template_params: {
        nome,
        email,
        empresa,
        mensagem
      }
    })
  })

  if (res.status === 200) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    }
  }

  const error = await res.text()
  return {
    statusCode: 400,
    body: JSON.stringify({ error })
  }
}
