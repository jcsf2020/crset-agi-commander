<<<<<<< HEAD
export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-slate-800">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">CRSET Solutions</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-yellow-300">Início</a>
          <a href="#" className="hover:text-yellow-300">Serviços</a>
          <a href="#" className="hover:text-yellow-300">Contactos</a>
        </nav>
      </header>

      {/* Main (Placeholder) */}
      <main className="flex-grow bg-gradient-to-b from-slate-100 to-slate-300 flex items-center justify-center">
        <div className="max-w-3xl text-center px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Soluções Inteligentes com IA</h2>
          <p className="text-lg text-slate-700 mb-6">
            Automatiza o teu negócio com tecnologia de ponta e suporte dedicado.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition">
            Saber mais
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center p-4">
        © 2025 CRSET Solutions. Todos os direitos reservados.
      </footer>
    </div>
  );
}
=======
﻿import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
>>>>>>> c1834314d02ff849e64fea7cd4d90aaca3bc0c3b
