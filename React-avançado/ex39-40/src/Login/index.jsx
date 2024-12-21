import { useState } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { signInThunk } from "../store/modules/user/thunks";

function Login() {
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*
  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "123456") {
      console.log("Login bem-sucedido!");
      dispatch(signInThunk(data))
      setError(false);
    } else {
      setError(true);
    }
  };
  */
  const onSubmit = (data) => {
    dispatch(signInThunk(data));
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="Nome de usuário"
            name="username"
            size="small"
            color="primary"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>
        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="Senha"
            name="password"
            size="small"
            color="primary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" size="large">
          Enviar
        </Button>
      </form>
      {error && <span>Usuário ou senha incorreta</span>}
    </>
  );
}

export default Login;

/*
import { useState } from "react";
import * as yup from "yup";
//import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";

function Login() {
  const [error, setError] = useState(false);
  console.log('Login');
  

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "Minimo de 6 dígitos")
      .required("campo obrigatório"),
  });

 // const history = useHistory();

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="Nome de usuario"
            name="username"
            size="small"
            color="red"
            inputRef={register}
           // error={!!errors.username}
            //helperText={errors.username?.message}
          ></TextField>
        </div>
        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="nome do usuario"
            name="password"
            size="small"
            color="red"
            inputRef={register}
           // error={!!errors.username}
         //   helperText={errors.username?.message}
          ></TextField>
        </div>
        <Button type="submit" variant="contained" color="blue" size="large">
          Enviar
        </Button>
      </form>
      {error && <span>Usuario ou senha incorreta </span>}
    </>
  );
}

export default Login
// hookform/resolver/yup     material-ui/core */
