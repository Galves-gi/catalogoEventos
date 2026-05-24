import style from "./ContainerSecaoCards.module.css"
import { SecaoCards } from "../SecaoCards/SecaoCards"
import frontend1 from '../../assets/frontend1.png'

export function ContainerSecaoCards() {
    const eventos =[
        {
            id:1,
            imagem:frontend1,
            tema:"FrontEnd",
            data:"12/02/2022",
            tituloCard:"FrontEnd",
            descricao:"Descricao"
        }
    ]
    return (
        <main className={style.containerSecaoCards}>
            <SecaoCards tema={eventos[0].tema} eventos={eventos} />
        </main>
    )
}