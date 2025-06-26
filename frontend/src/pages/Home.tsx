import Header from "../components/Header"

function Home() {
  return (
    <>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao CRSET Fullstack</h1>
        <p className="mt-4 text-gray-600">Este é o início da tua dashboard protegida</p>
      </main>
    </>
  )
}

export default Home
