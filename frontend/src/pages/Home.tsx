import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../components/Header"

function Home() {
  const [message, setMessage] = useState("...")

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Erro ao ligar ao backend"))
  }, [])

  return (
    <>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao CRSET Fullstack</h1>
        <p className="mt-4 text-gray-600">{message}</p>
      </main>
    </>
  )
}

export default Home
