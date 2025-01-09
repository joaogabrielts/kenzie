//Os generics se assemelham muito a ideia de parâmetros de função, presente no Javascript, com eles é possível criar tipos e interfaces que podem receber outros tipos ou interfaces como parâmetros.

interface IOwner<S> {
  name: string;
  age: number;
  state: S;
}

interface IApartament {
  size: number;
  rooms: number;
  balcony: boolean;
}

interface IHouse {
  size: number;
  rooms: number;
  garden: boolean;
  floors: number;
}

const apartamentOwer: IOwer<IHouse> = {
  name: "Gabriel",
  age: 19,
  state: {
    size: 21,
    rooms: 9,
    garden: false,
    floors:3
  },
};

//Criamos a interface iOwner que pode receber outra interface para descrever o state, demonstramos dois exemplos, um com a interface iApartament e outra com a iHouse.

export default apartamentOwer