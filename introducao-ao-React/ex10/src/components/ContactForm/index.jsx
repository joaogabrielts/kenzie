import { Input } from "../../Fragments/input"

export const ContactForm = () => {
    return(
        <form>
        <h2>Fale conosco</h2>
        <Input/>
        <Input/>
        <Input/>
        <button type="submit">Enviar uma mensagem</button>
    </form>
    )
}