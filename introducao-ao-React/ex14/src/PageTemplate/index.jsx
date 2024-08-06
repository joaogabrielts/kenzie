import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const PageTemplate = ({children}) => {
    return(
      <>
      <Header/>
      <main>
         {children}
      </main>
      <Footer/>
     
      </>
    )
  }