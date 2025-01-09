import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

/*  
Foward Ref + prop rest
Quando utilizamos fowardRef e a prop rest temos a possibilidade de um componente mais versátil e dinâmico.

Maneira mais versatil, 1 
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // extends InputHTMLAttributes<HTMLInputElement> colocamos isso pra colocar os atributos no elemento, antes o rest estava vazio, com isso ele ficou com mais de 289 atributos
  label?: string;
}

export const Input = forwardRef(({ label, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input ref={ref} {...rest} />
    </div>
  );
});


Para realizarmos a devida tipagem desse modelo, foram necessários alguns passos:

Tipar a referência fornecida pelo fowardRef, está será tipada com interface nativa do React (FowardedRef) que receberá como generics o tipo do elemento na qual essa referência deverá ser atribuída, neste caso um input: ForwardedRef<HTMLInputElement>
Feito isso, será necessário criar uma interface para associarmos ao nosso objeto de prop, e nela será estendido o conjunto InputHTMLAttributes<HTMLInputElement> que carrega a tipagem de todos os atributos nativos de um input. Com isso, nosso componente terá no autocomplete a mesma gama de atributos que o elemento.
Realizados os dois passos o componente estará pronto para utilização.

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// essa é uma alternativa que não utilizar o forwardRef e é bem especifico no que é recebido,,      MANEIRA 2
//Props estritas
//Se precisarmos de um componente com menos versatilidade e regras mais específicas, pode não ser necessário utilizar o forwardRef. No entanto, isso exigirá que tipemos cada propriedade que será recebida pelo componente individualmente.

//Confira o exemplo abaixo:

interface IIpuntProps {
  label?: string;
  type: "text" | "email" | "number" | "password";
  placeholder?: string;
  register: UseFormRegisterReturn<string>; // pegamos isso no register quando passamos o mouse emcima dele
}

export const Input = ({ label, type, placeholder, register }: IIpuntProps) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input type={type} placeholder={placeholder} {...register} />
    </div>
  );
};

/*Neste cenário, cada nova prop, precisaria ser adicionada a interface IInputProps.

Um adento importante é que o tipo UseFormRegisterReturn foi fornecido pelo próprio React Hook Form, cada retorno de useForm terá um tipo fornecido pela biblioteca. */
