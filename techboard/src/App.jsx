import './App.css'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Cabecalho } from './components/Cabecalho/Cabecalho' 
import { ContainerSecaoCards } from './components/ContainerSecaoCards/ContainerSecaoCards' 

function App() {
  return (
    <>
      <Cabecalho />
      <HeroSection />
      <ContainerSecaoCards/>
    </>
  )
}

export default App
