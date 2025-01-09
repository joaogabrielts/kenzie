import { v4 as uuidv4 } from 'uuid';




export interface IForm {
  id:  string;
  text: string;
  textarea: string;
}

export const Form: IForm[] = [
  {id: uuidv4(), text: "Example text", textarea: "Example textarea" },
];

