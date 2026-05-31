import './App.css'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Cabecalho } from './components/Cabecalho/Cabecalho'
import { ContainerSecaoCards } from './components/ContainerSecaoCards/ContainerSecaoCards'
import frontend1 from './assets/frontend1.png'

function App() {
  const temas = [
    {
      id: 1,
      tema: "FrontEnd"
    }, {
      id: 2,
      tema: "BackEnd"
    },
    {
      id: 3,
      tema: "FullStack"
    }
  ]

  const eventos = [
    {
      id: 1,
      imagem: frontend1,
      tema: "FrontEnd",
      data: "12/02/2022",
      tituloCard: "FrontEnd",
      descricao: "Descricao"
    }
  ]

  function adicionarEvento(evento) {
    eventos.push(evento)
    console.log("evento enviado", evento, "todos os eventos", eventos);
  }

  return (
    <>
      <Cabecalho />
      <HeroSection temas={temas} adicionarEvento={adicionarEvento} />
      <ContainerSecaoCards eventos={eventos} temas={temas} />
    </>
  )
}

export default App
