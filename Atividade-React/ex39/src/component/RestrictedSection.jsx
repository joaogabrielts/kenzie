export const Restricted = ({setLogin}) => {
    return (
        <section>
            <h1> Seja Bem vindo ao meu aplicativo
            </h1>
            <button onClick={() => setLogin(false)}>Logout</button>
        </section>

    )
}