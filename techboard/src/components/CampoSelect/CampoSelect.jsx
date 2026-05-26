
export function CampoSelect({ htmlFor, titulo, value, nameValue, eventos }) {
    return (
        <fieldset>
            <label htmlFor={htmlFor}>
                {titulo}
            </label>
            <select defaultValue=" ">
                <option value="" disabled >
                    Seleciona uma opção
                </option>
                {eventos.map(function(evento){
                    return <option value={evento.id} key={evento.id}>
                        {evento.tema}
                    </option>
                })}
            </select>
        </fieldset>
    )
}