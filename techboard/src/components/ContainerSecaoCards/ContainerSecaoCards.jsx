import style from "./ContainerSecaoCards.module.css"
import { SecaoCards } from "../SecaoCards/SecaoCards"

export function ContainerSecaoCards({ eventos, temas }) {

    return (
        <main className={style.containerSecaoCards}>

            {temas.map(grupo => {
                const eventosDoTema = eventos.filter(evento => evento.tema === grupo.tema)

                if (eventosDoTema.length === 0) return null


                return <SecaoCards key={grupo.id} tema={grupo.tema} eventos={eventosDoTema} />
            })}

        </main>
    )
}