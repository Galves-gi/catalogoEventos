import styles from "./Formulario.module.css"

export function Formulario(){
    return (
        <form className="formulario">
            <h2>Preencha para criar um evento:</h2>
            <fieldset>
                <label htmlFor="nomeEvento">
                    Qual é o nome do evento?
                </label>
                <input type="text" id="nomeEvento" />
            </fieldset>
        </form>
    )
}