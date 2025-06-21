import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/auth/Login"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-screen text-center px-6">
              <h1 className="text-2xl font-bold mb-4">CRSET Commander 🧠</h1>
              <p className="text-lg mb-6">
                Lançamos automações com IA para o teu negócio em 3 dias.
              </p>
              <a
                href="https://buy.stripe.com/test_aEUg2d4ih4P17sIbIJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Automatizar agora por 149 €
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
