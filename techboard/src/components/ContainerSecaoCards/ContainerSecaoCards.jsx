import style from "./ContainerSecaoCards.module.css"
import { SecaoCards } from "../SecaoCards/SecaoCards"

export function ContainerSecaoCards({eventos}) {

    return (
        <main className={style.containerSecaoCards}>
            {eventos.map(function(evento){
                return <SecaoCards tema={evento.tema} eventos={eventos} key={evento.id} />
            })}
        </main>
    )
}