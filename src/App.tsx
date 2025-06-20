import './index.css';
import Hero from './components/Hero';

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

      {/* Main */}
      <main className="flex-grow bg-gradient-to-b from-slate-100 to-slate-300 flex items-center justify-center">
        <Hero />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center p-4">
        © 2025 CRSET Solutions. Todos os direitos reservados.
      </footer>
    </div>
  );
}

