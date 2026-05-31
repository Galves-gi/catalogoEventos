
export function CampoSelect({ htmlFor, titulo, value, name, temas }) {

    return (
        <fieldset>
            <label htmlFor={htmlFor}>
                {titulo}
            </label>
            <select id={htmlFor}
                name={name}
                defaultValue=" ">
                <option value="" disabled >
                    Seleciona uma opção
                </option>
                {temas?.map(tema => {
                    return <option value={tema.tema} key={tema.id}>
                        {tema.tema}
                    </option>
                })}
            </select>
        </fieldset>
    )
}