import { create } from "zustand";

export interface IForm {
  id: number;
  name: string;
  age: string;
}



interface IFormStore {
  formList: IForm[];
  addForm: (newForm: IForm) => void;
 removeForm: (formId: number) => void;
}

export const useFruitStore = create<IFormStore>((set) => ({
  formList: [],
  
  
  addForm: (newForm) =>
    set(({ formList }) => {
      const newFormList = [...formList, newForm];
      return { formList: newFormList };
    }),

  removeForm: (formId) =>
    set(({ formList }) => {
      const newFormList = formList.filter(
        (currentForm) => currentForm.id !== formId
      );
      return { formList: newFormList };
    }),
}));


/*
 
 */
