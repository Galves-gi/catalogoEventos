
export function CampoSelect({ htmlFor, titulo, name, value, nameValue }) {
    return (
        <fieldset>
            <label htmlFor={htmlFor}>
                {titulo}
            </label>
            <select name={name}>
                <option value={value}>{nameValue}</option>
            </select>
        </fieldset>
    )
}