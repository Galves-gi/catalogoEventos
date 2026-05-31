import { CampoInput } from "../CampoInput/CampoInput"
import { CampoSelect } from "../CampoSelect/CampoSelect"
import { Botao } from "../Botao/Botao"

export function Formulario({ temas, adicionarEvento }) {

    function aoFormSubmit(formData) {
        console.log(formData.get("selectEvento"));
        const evento = {
            imagem: formData.get("imagemEvento"),
            tema: temas.find(tema => tema.tema === formData.get("selectEvento")),
            nome: formData.get("nomeEvento"),
            data: formData.get("dataEvento"),
            tituloCard: formData.get("nomeEvento")
        };

        adicionarEvento(evento)
    }

    return (
        <form className="formulario" action={aoFormSubmit}>
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

            <CampoInput
                htmlFor="imagemEvento"
                titulo="Qual é a URL da imagem?"
                type="text"
                id="imagemEvento"
                placeholder="URL da imagem"
                name="imagemEvento" />

            <CampoSelect
                htmlFor="selectEvento"
                titulo="Tema do evento"
                name="selectEvento"
                temas={temas} />
            <Botao
                type="submit"
                name="botaoEvento"
                texto="Criar Evento"
            />
        </form>
    )
}
