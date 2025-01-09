import { useSelector } from "react-redux";
import DigimonCard from "../DigimonCard/DigimonCard";


const DigimonList = () => {
  const digimons = useSelector((state) => state.digimons);

  return (
    <div>
      <h2>Lista de Digimons</h2>
      {digimons.length === 0 ? (
        <p>Nenhum Digimon encontrado. Faça uma busca!</p>
      ) : (
        <ul>
          {digimons.map((digimon, index) => (
            <DigimonCard key={index} digimon={digimon} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DigimonList;
