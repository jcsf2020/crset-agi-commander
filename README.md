# CRSET AGI Commander - Sistema de Leads

Sistema de gestão de leads com integração real Supabase + EmailJS, desenvolvido com React, TypeScript e Vite.

## 🚀 Funcionalidades

- ✅ **Formulário de contato responsivo** com validação completa
- ✅ **Integração real com Supabase** para armazenamento de leads
- ✅ **Envio automático de emails** via EmailJS
- ✅ **Sistema modular e escalável** pronto para 10k+ usuários
- ✅ **TypeScript** para maior segurança e produtividade
- ✅ **Interface moderna** com CSS responsivo

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Supabase** - Base de dados PostgreSQL
- **EmailJS** - Serviço de envio de emails
- **CSS3** - Estilização responsiva

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd crset-agi-commander
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas credenciais:
```env
# Configurações do Supabase
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_KEY=your_supabase_anon_key_here

# Configurações do EmailJS
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
VITE_EMAILJS_USER_ID=your_emailjs_user_id_here
```

## 🗄️ Configuração do Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Execute o seguinte SQL para criar a tabela de leads:

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);

-- RLS (Row Level Security) - opcional
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de leads
CREATE POLICY "Allow lead insertion" ON leads
  FOR INSERT WITH CHECK (true);
```

## 📧 Configuração do EmailJS

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email com as seguintes variáveis:
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{phone}}` - Telefone
   - `{{company}}` - Empresa
   - `{{message}}` - Mensagem
   - `{{to_name}}` - Nome do destinatário

## 🚀 Execução

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### Produção
```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ContactForm.tsx      # Componente principal do formulário
│   └── ContactForm.css      # Estilos do formulário
├── services/
│   ├── supabase.ts          # Configuração do cliente Supabase
│   ├── saveLead.ts          # Função para salvar leads
│   └── sendEmail.ts         # Função para envio de emails
├── App.tsx                  # Componente principal
├── main.tsx                 # Ponto de entrada
└── vite-env.d.ts           # Tipos das variáveis de ambiente
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linting do código

## 🛡️ Segurança

- ✅ Validação de formulário no frontend e backend
- ✅ Sanitização de dados antes do armazenamento
- ✅ Variáveis de ambiente para credenciais sensíveis
- ✅ TypeScript para prevenção de erros em runtime
- ✅ Row Level Security (RLS) no Supabase

## 📊 Performance

- ✅ Build otimizado com Vite
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Compressão gzip habilitada
- ✅ Source maps para debugging

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Changelog

### v1.0.0 - [LEADS REAL FUNCTIONALITY]
- ✅ Integração completa com Supabase
- ✅ Envio automático de emails via EmailJS
- ✅ Formulário responsivo e validado
- ✅ Sistema modular e escalável
- ✅ Documentação completa

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

Para suporte, entre em contato através do formulário do sistema ou abra uma issue no repositório.

---

**Desenvolvido com ❤️ pela equipe CRSET AGI Commander**