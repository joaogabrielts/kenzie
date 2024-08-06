import { Footer } from "../Footer"
import { Header } from "../Header"

export const Props = ({ children }) => {

    return (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />

    </>
    )
}