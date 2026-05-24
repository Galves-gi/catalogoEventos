export function CampoInput({
    titulo,
    htmlFor, ...input }) {
    return (
        <fieldset>
            <label htmlFor={htmlFor}>
                {titulo}
            </label>
            <input {...input} />

        </fieldset>
    )
}