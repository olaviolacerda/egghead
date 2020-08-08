// Differences between type and interfaces

interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
}

let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias;

//this is not wrong
animalInterface = animalTypeAlias;

type Cat = IPet & IFeline;

interface IPet {
  pose(): void;
}

interface IFeline {
  nightvision: boolean;
}
