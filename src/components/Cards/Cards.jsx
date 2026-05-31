import style from "./Cards.module.css"

export function Cards({imagemCard,tituloCard,tema,data,descricao}) {
    return (
        <article className={style.card}>
            <img src={imagemCard || null} alt={tituloCard} />
            <div>
                <h6 className={style.blocoTema}>
                    {tema}
                </h6>
                <time>
                    {data}
                </time>
                <h3>
                    {tituloCard}
                </h3>
            </div>
        </article>
    )
}