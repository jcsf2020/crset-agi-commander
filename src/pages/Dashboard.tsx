import React from 'react'

export default function Dashboard() {
  async function handleBuy() {
    const res = await fetch('/api/checkout', { method: 'POST' })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Painel CRSET 💡</h1>
      <button
        onClick={handleBuy}
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
      >
        Comprar Agora 💸
      </button>
    </div>
  )
}
