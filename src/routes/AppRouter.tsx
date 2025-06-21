import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/components/auth/Login'
import Dashboard from '@/pages/Dashboard'
import PrivateRoute from '@/components/auth/PrivateRoute'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
