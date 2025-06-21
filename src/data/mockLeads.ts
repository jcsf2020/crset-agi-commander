export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
}

export const mockLeads: Lead[] = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@empresa.com',
    phone: '+351 912 345 678',
    message: 'Interessado em soluções de IA para a nossa empresa. Gostaríamos de agendar uma reunião.',
    date: '2024-01-15',
    status: 'new'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@tech.pt',
    phone: '+351 923 456 789',
    message: 'Preciso de consultoria em machine learning para projeto de análise de dados.',
    date: '2024-01-14',
    status: 'contacted'
  },
  {
    id: 3,
    name: 'Pedro Costa',
    email: 'pedro.costa@startup.io',
    phone: '+351 934 567 890',
    message: 'Startup procura parceiro tecnológico para desenvolvimento de chatbot inteligente.',
    date: '2024-01-13',
    status: 'qualified'
  },
  {
    id: 4,
    name: 'Ana Rodrigues',
    email: 'ana.rodrigues@corp.com',
    phone: '+351 945 678 901',
    message: 'Empresa multinacional interessada em automatização de processos com IA.',
    date: '2024-01-12',
    status: 'new'
  },
  {
    id: 5,
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@digital.pt',
    phone: '+351 956 789 012',
    message: 'Agência digital procura soluções de IA para personalização de conteúdo.',
    date: '2024-01-11',
    status: 'closed'
  },
  {
    id: 6,
    name: 'Sofia Oliveira',
    email: 'sofia.oliveira@health.com',
    phone: '+351 967 890 123',
    message: 'Setor da saúde interessado em IA para diagnóstico médico assistido.',
    date: '2024-01-10',
    status: 'contacted'
  },
  {
    id: 7,
    name: 'Miguel Pereira',
    email: 'miguel.pereira@finance.pt',
    phone: '+351 978 901 234',
    message: 'Instituição financeira procura soluções de IA para detecção de fraudes.',
    date: '2024-01-09',
    status: 'new'
  },
  {
    id: 8,
    name: 'Catarina Lopes',
    email: 'catarina.lopes@retail.com',
    phone: '+351 989 012 345',
    message: 'Cadeia de retalho interessada em IA para otimização de inventário.',
    date: '2024-01-08',
    status: 'qualified'
  }
];