// zod oferece um mecanismo mais sofisticado para criação desta tipagem. Com o método infer podemos produzir um tipo através do schema de formulário criado. O recurso pode ser poderoso, principalmente em formulários maiores e nos poupar um tempo considerável de escrita de interfaces.

//Confira o exemplo abaixo:

import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "E-mail é obrigatório" }),
  password: z.string().min(1, { message: "E-mail é obrigatório" }),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;
