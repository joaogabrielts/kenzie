import { z } from "zod";

export const loginFormSchema = z.object({
  text: z.string().min(1, { message: "digite aqui" }),
  textarea: z.string().min(1, { message: "digite aqui" }),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;
