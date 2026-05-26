import { CampoInput } from "../CampoInput/CampoInput"
import { CampoSelect } from "../CampoSelect/CampoSelect"
import { Botao } from "../Botao/Botao"

export function Formulario({eventos}) {
    return (
        <form className="formulario">
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
                nameValue="teste"
                eventos={eventos} />
            <Botao
                type="submit"
                name="botaoEvento"
                texto="Criar Evento"
            />
        </form>
    )
}
