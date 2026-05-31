import { useState } from 'react'
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
    },
    {
      id: 2,
      tema: "BackEnd"
    },
    {
      id: 3,
      tema: "FullStack"
    },
    {
      id: 4,
      tema: "DevOps"
    },
    {
      id: 5,
      tema: "Mobile"
    },
    {
      id: 6,
      tema: "UI/UX"
    }
  ];

  const [eventos, setEventos] = useState([
    {
      id: 1,
      imagem: "https://cdn.univicosa.com.br/img/portal/evento/img/2021/o-poder-em-suas-maos-domine-a-tecnologia_1624479505.png",
      tema: "FrontEnd",
      data: "12/02/2026",
      tituloCard: "React Summit Brasil"
    },
    {
      id: 2,
      imagem: "https://images.sympla.com.br/69cd197e73d31.jpg",
      tema: "FrontEnd",
      data: "18/03/2026",
      tituloCard: "Angular Connect"
    },
    {
      id: 3,
      imagem: "https://pr.agenciasebrae.com.br/wp-content/uploads/sites/16/2024/08/EcoTICNova-banner.png",
      tema: "BackEnd",
      data: "25/04/2026",
      tituloCard: "Node.js Conference"
    },
    {
      id: 4,
      imagem: "https://i.ytimg.com/vi/mcprqKWpKdg/maxresdefault.jpg",
      tema: "BackEnd",
      data: "10/05/2026",
      tituloCard: "API Design Day"
    },
    {
      id: 5,
      imagem: "https://cdn.univicosa.com.br/img/portal/evento/img/2021/o-poder-em-suas-maos-domine-a-tecnologia_1624479505.png",
      tema: "FullStack",
      data: "05/06/2026",
      tituloCard: "FullStack Experience"
    },
    {
      id: 6,
      imagem: "https://images.sympla.com.br/69cd197e73d31.jpg",
      tema: "FullStack",
      data: "22/06/2026",
      tituloCard: "JavaScript Universe"
    },
    {
      id: 7,
      imagem: "https://pr.agenciasebrae.com.br/wp-content/uploads/sites/16/2024/08/EcoTICNova-banner.png",
      tema: "DevOps",
      data: "15/07/2026",
      tituloCard: "Docker & Kubernetes Day"
    },
    {
      id: 8,
      imagem: "https://i.ytimg.com/vi/mcprqKWpKdg/maxresdefault.jpg",
      tema: "DevOps",
      data: "29/07/2026",
      tituloCard: "CI/CD na Prática"
    },
    {
      id: 9,
      imagem: "https://images.sympla.com.br/69cd197e73d31.jpg",
      tema: "Mobile",
      data: "11/08/2026",
      tituloCard: "Flutter Summit"
    },
    {
      id: 10,
      imagem: "https://cdn.univicosa.com.br/img/portal/evento/img/2021/o-poder-em-suas-maos-domine-a-tecnologia_1624479505.png",
      tema: "Mobile",
      data: "25/08/2026",
      tituloCard: "React Native Conference"
    },
    {
      id: 11,
      imagem: "https://pr.agenciasebrae.com.br/wp-content/uploads/sites/16/2024/08/EcoTICNova-banner.png",
      tema: "UI/UX",
      data: "09/09/2026",
      tituloCard: "Design Systems Summit"
    },
    {
      id: 12,
      imagem: "https://i.ytimg.com/vi/mcprqKWpKdg/maxresdefault.jpg",
      tema: "UI/UX",
      data: "20/09/2026",
      tituloCard: "UX Research Experience"
    }
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
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
