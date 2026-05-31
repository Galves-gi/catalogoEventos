# TechBoard

![TechBoard](./src/assets/capa-readme.png)

## Badges

![Status](https://img.shields.io/badge/STATUS-FINALIZADO-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?style=for-the-badge&logo=javascript)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=for-the-badge&logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Mobile%20First-1572b6?style=for-the-badge&logo=css3)

## Índice

* [Descrição do Projeto](#descrição-do-projeto)
* [Funcionalidades](#funcionalidades)
* [Arquitetura do Sistema](#arquitetura-do-sistema)
* [Como Usar](#como-usar)
* [Dependências](#dependências)
* [Decisões de Projeto](#decisões-de-projeto)
* [Onde Encontrar Ajuda](#onde-encontrar-ajuda)
* [Autores](#autores)
* [Licença](#licença)

## Descrição do Projeto

TechBoard é uma aplicação web desenvolvida com React 19, JavaScript e Vite para gerenciamento e exibição de eventos de tecnologia.

O projeto foi construído com foco em conceitos fundamentais do ecossistema React, incluindo componentização, gerenciamento de estado com Hooks, fluxo unidirecional de dados via props, renderização dinâmica de listas e manipulação de formulários utilizando Form Actions.

Os eventos são organizados por categorias como FrontEnd, BackEnd, FullStack, DevOps, Mobile e UI/UX, permitindo a visualização agrupada e o cadastro de novos eventos em tempo real.

### Principais Conceitos Aplicados
- Componentização e reutilização de componentes.
- Gerenciamento de estado com useState.
- Comunicação entre componentes através de props.
- Renderização condicional.
- Renderização dinâmica de listas com .map().
- Agrupamento de dados utilizando .filter().
- Manipulação de formulários com FormData.
- Criação de identificadores únicos com crypto.randomUUID().
- Layout responsivo seguindo a abordagem Mobile First.
- Organização modular de arquivos e responsabilidades.


## Funcionalidades

### 1. Listagem de Eventos por Tema
Exibe todos os eventos organizados por categorias, com layout responsivo (mobile first).

**Como funciona:**

Os eventos são armazenados no estado global da aplicação e renderizados dinamicamente de acordo com o tema selecionado.

Cada seção filtra apenas os eventos pertencentes à sua categoria utilizando o método .filter(), garantindo que os cards sejam agrupados corretamente por tema.
```
//lista de Temas 
const temas = [
    {
        ...
    }]

//lista de eventos
 const [eventos, setEventos] = useState([
    {...}])
```
- Em ContainerSecaoCards, Cada tema filtra apenas seus eventos correspondentes com o metodo .filter

```
{temas.map(grupo => {
    const eventosDoTema = eventos.filter(evento => evento.tema === grupo.tema) //compara se o texto tema é igual ao campo do evento.tema

    if (eventosDoTema.length === 0) return null


    return <SecaoCards key={grupo.id} tema={grupo.tema} eventos={eventosDoTema} /> //envia props dos eventos agrupados por tema
})}
```

### 2. Adição de Novos Eventos
Formulário para cadastrar novos eventos em tempo real.

**Como funciona:**

A aplicação permite adicionar novos eventos através de um formulário controlado por Form Actions.

Os dados são coletados por meio do objeto FormData, transformados em um novo objeto de evento e adicionados ao estado da aplicação, atualizando a interface automaticamente sem recarregar a página.

```
Formulario.jsx

<form action={aoFormSubmit}> ...</form>

function aoFormSubmit(formData) {
    
        const evento = {
        id: crypto.randomUUID(), //gerar id 
        imagem: formData.get("imagemEvento"),
        tema: formData.get("selectEvento"),
        nome: formData.get("nomeEvento"),
        data: formData.get("dataEvento"),
        tituloCard: formData.get("nomeEvento")
    };

    adicionarEvento(evento)
}

A atualização da interface ocorre através da atualização imutável do estado:

App.jsx

function adicionarEvento(evento) {
    setEventos([...eventos, evento])
}
```


### 3. Componentes Reutilizáveis
Arquitetura baseada em componentes com props bem definidas.

## Arquitetura do Sistema

### Estrutura de Pastas

```
techboard/
├── src/
│   ├── components/
│   │   ├── Cabecalho/
│   │   ├── HeroSection/
│   │   ├── ContainerSecaoCards/
│   │   ├── SecaoCards/
│   │   └── Cards/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
└── vite.config.js
```

### Fluxo da Aplicação

```
App.jsx (Estado Global)
    │
    ├── [eventos] ─→ ContainerSecaoCards
    │                    │
    │                    └── SecaoCards (por tema)
    │                         │
    │                         └── Cards (individualmente)
    │
    └── [adicionarEvento] ←─ HeroSection
                                │
                                └── Formulário
```

### Componentes Principais

| Componente | Responsabilidade | Props |
|-----------|------------------|-------|
| `App` | Gerencia estado global de eventos | - |
| `HeroSection` | Exibe banner e formulário | `temas`, `adicionarEvento` |
| `ContainerSecaoCards` | Renderiza seções por tema | `eventos`, `temas` |
| `SecaoCards` | Agrupa cards por categoria | `tema`, `eventos` |
| `Cards` | Exibe informações do evento | `imagemCard`, `tituloCard`, `tema`, `data`, `descricao` |

## Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone <link https>
cd techboard
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse em seu navegador:
```
http://localhost:5173
```

---
- **Comunidade React Brasil**: [Discord/Telegram React Brasil](https://discord.gg/react-brasil)
- **Documentação Oficial**: [React.dev](https://react.dev)
- **Vite Guide**: [vitejs.dev](https://vitejs.dev)
- **CSS Responsivo**: [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/CSS)

---

**Desenvolvido por **Galves-gi** em 2026**