import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div className="flex h-screen items-center justify-center">
          <h1 className="text-2xl font-bold">CRSET Commander 🧠</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}
