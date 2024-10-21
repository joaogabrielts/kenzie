import { Cart } from "../../components/Cart"
import { ProductList } from "../../components/ProductList"
import { ProductProvider } from "../../providers/ProductContext"

export const Homepage = () => {
    return(
        <main>
            <ProductProvider>
                <ProductList/>  
            </ProductProvider>
            <Cart/>
        </main>
    )
}