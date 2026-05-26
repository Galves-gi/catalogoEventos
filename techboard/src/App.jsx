import './App.css'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Cabecalho } from './components/Cabecalho/Cabecalho'
import { ContainerSecaoCards } from './components/ContainerSecaoCards/ContainerSecaoCards'
import frontend1 from './assets/frontend1.png'

function App() {

  const eventos = [
    {
      id: 1,
      imagem: frontend1,
      tema: "FrontEnd",
      data: "12/02/2022",
      tituloCard: "FrontEnd",
      descricao: "Descricao"
    },
    {
      id: 2,
      tema: "BackEnd",
    },
    {
      id: 3,
      tema: "FullStack",
    }
  ]

  return (
    <>
      <Cabecalho />
      <HeroSection eventos={eventos} />
      <ContainerSecaoCards eventos={eventos} />
    </>
  )
}

export default App
