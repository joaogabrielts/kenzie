import { createContext, useState } from "react";
import { IForm } from "../dataBase";

interface IFormListProviderProps {
  children: React.ReactNode;
}

interface IFormListContext {
  formList: IForm[];
  addFormToCart: (form: IForm) => void;
  removeFormCart: (formId: string) => void;
}

export const FormListContext = createContext({} as IFormListContext);

export const FormListProvider = ({ children }: IFormListProviderProps) => {
  const [formList, setFormList] = useState<IForm[]>([]);
  console.log(formList);
  

  const addFormToCart = (form: IForm) => {
    if (!formList.some((cartForm) => cartForm.id === form.id)) {
      setFormList([...formList, form]);
    }
  };

  const removeFormCart = (formId: string) => {
    const newRemoveCart = formList.filter(
      (cartProduct) => cartProduct.id !== formId
    );
    setFormList(newRemoveCart);
  };

  return (
    <FormListContext.Provider value={{formList,addFormToCart, removeFormCart }}>
      {children}
    </FormListContext.Provider>
  );
};
