import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../services/api";
import formatValue from "../utils/formatValue";
import { CircularProgress } from "@mui/material";
import { addToCartThunk } from "../store/modules/cart/thunks";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    const response = await api.get("products");
    console.log(response, "oi");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));
    setLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <CircularProgress size={50} />
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.img} />
              </figure>
              <strong>{product.name}</strong>
              <div>
                <span>{product.priceFormatted}</span>
             
                <Link to="/cart">
                  {" "}
                  <button
                    type="button"
                    onClick={() => dispatch(addToCartThunk(product))}
                  >
                    Adiconar ao carrinho
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;

/**    <button
                  type="button"
                  onClick={() => dispatch(addToCartThunk(product))}
                >
                  <span>Adiconar ao carrinho</span>
                </button>*/
