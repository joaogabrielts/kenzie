const DigimonCard = ({ digimon }) => {
    return (
      <li>
        <h3>{digimon.name}</h3>
        <img src={digimon.img} alt={digimon.name} width="100" />
        <p>Nível: {digimon.level}</p>
      </li>
    );
  };
  
  export default DigimonCard;
  