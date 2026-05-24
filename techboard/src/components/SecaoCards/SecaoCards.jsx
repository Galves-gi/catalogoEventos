import { Cards } from "../Cards/Cards"
import style from "./SecaoCards.module.css"

export function SecaoCards({ tema, eventos }) {
    return (
        <section className={style.secaoCards}>
            <h3>{tema}</h3>

            <div className={style.containerCards}>
                {eventos.map((cadaEvento) => (
                    <Cards
                        key={cadaEvento.id}
                        imagemCard={cadaEvento.imagem}
                        tema={cadaEvento.tema}
                        data={cadaEvento.data}
                        tituloCard={cadaEvento.tituloCard}
                        descricao={cadaEvento.descricao}
                    />
                ))}

            </div>
        </section>
    )
}