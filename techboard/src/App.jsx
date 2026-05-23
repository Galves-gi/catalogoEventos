import { useState } from 'react'
import { Formulario } from './components/Formulario/Formulario'
import banner from './assets/banner.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src="/logo.png" alt="logo do TechBoard" />
      </header>
      <figure className='banner'>
        <img src={banner} alt="Banner TechBoard" />
        <Formulario />
      </figure>
    </>
  )
}

export default App
