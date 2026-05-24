import { CampoInput } from "../CampoInput/CampoInput"
import { CampoSelect } from "../CampoSelect/CampoSelect"
import { Botao } from "../Botao/Botao"
import style from"./Formulario.module.css"

export function Formulario() {
    return (
        <form className={style.formulario}>
            <h2>Preencha para criar um evento:</h2>
            <CampoInput
                htmlFor="nomeEvento"
                titulo="Qual é o nome do evento?"
                type="text"
                id="nomeEvento"
                placeholder="Summer dev hits"
                name="nomeEvento" />

            <CampoInput
                htmlFor="dataEvento"
                titulo="Data de evento"
                type="date"
                id="dataEvento"
                name="dataEvento" />

            <CampoSelect
                htmlFor="selectEvento"
                titulo="Tema do evento"
                name="selectEvento"
                value="teste"
                nameValue="teste" />
            <Botao
                type="submit"
                name="botaoEvento"
                texto="Criar Evento"
            />
        </form>
    )
}
