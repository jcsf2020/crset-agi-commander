import React, { useState } from 'react';
import { mockLeads } from '../data/mockLeads';
import Sidebar from '../components/Sidebar';

const Leads: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = mockLeads.filter(lead => {
    const matchesStatus = selectedStatus === 'all' || lead.status === selectedStatus;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'qualified':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return 'Novo';
      case 'contacted':
        return 'Contactado';
      case 'qualified':
        return 'Qualificado';
      case 'closed':
        return 'Fechado';
      default:
        return status;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Gestão de Leads</h1>
            <p className="text-gray-600 mt-2">
              Gerir e acompanhar todos os leads do sistema
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesquisar
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Pesquisar por nome, email ou mensagem..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Filtrar por Status
                </label>
                <select
                  id="status"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">Todos</option>
                  <option value="new">Novos</option>
                  <option value="contacted">Contactados</option>
                  <option value="qualified">Qualificados</option>
                  <option value="closed">Fechados</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Mostrando {filteredLeads.length} de {mockLeads.length} leads
            </p>
          </div>

          {/* Leads Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                      <p className="text-sm text-gray-600">{lead.email}</p>
                      <p className="text-sm text-gray-600">{lead.phone}</p>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      getStatusColor(lead.status)
                    }`}>
                      {getStatusLabel(lead.status)}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 line-clamp-3">{lead.message}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(lead.date).toLocaleDateString('pt-PT')}</span>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLeads.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📭</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum lead encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros de pesquisa.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leads;