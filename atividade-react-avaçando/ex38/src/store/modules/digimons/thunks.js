import axios from "axios";
import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response) => {
      console.log(response);
      
      dispatch(addDigimon(response.data[0]));
      setError(""); // Limpa os erros
    })
    .catch((erro) => {
      setError("Digimon não encontrado!");
      console.log(erro);
    });
};

export default addDigimonsThunk;
