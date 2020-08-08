// Using ! to initialize a property instead of checking or putting inside the constructor

class Library {
  titles!: string[];

  constructor() { };
}

const library = new Library();


const shortTitles = library.titles.filter(
  title => title.length < 5
);



