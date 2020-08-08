interface IPet {
  name: string;
  age: number;
  favoritePark?: string;
}

type ReadonlyPet = {
  //adding readyonly
  //removing ? optional propertys
  +readonly [K in keyof IPet]-?: IPet[K];
}


const pet: IPet = { name: 'Buttons', age: 5 };
const readonlyPet: ReadonlyPet = { name: 'Buttons', age: 5, favoritePark: 'Something' };

pet.age = 6;
readonlyPet.age = 6; // should throw error cause that object is readonly
