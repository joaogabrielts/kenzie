import { createContext, useState } from "react";
import { IFruit } from "../database/fruits";

interface IShoppingCartProviderProps {
  children: React.ReactNode;
}

interface IShoppingCartContext {
  shoppingCart: IFruit[];
  addFruitToCart: (fruit: IFruit) => void;
  removeFruitFromCart: (fruitId: number) => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const ShoppingCartProvider = ({
  children,
}: IShoppingCartProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<IFruit[]>([]);

  const addFruitToCart = (fruit: IFruit) => {
    if (!shoppingCart.some((cartFruit) => cartFruit.id === fruit.id)) {
      setShoppingCart([...shoppingCart, fruit]);
    }
  };

  const removeFruitFromCart = (fruitId: number) => {
    const newShoppingCart = shoppingCart.filter(
      (cartProduct) => cartProduct.id !== fruitId
    );
    setShoppingCart(newShoppingCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addFruitToCart, removeFruitFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

/*No segundo contexto, também reaproveitamos o contexto IFruit tendo em vista que o mesmo tipo de objeto presente no estado fruitList é o presente em shoppingCart. O fluxo de tipagem foi mesmo do primeiro contexto, primeiro foi tipado todo o conteúdo interno e em seguida os tipos foram replicados na interface IShoppingCartContext. */
