// function types with conditional types

interface StringContainer {
  value: string;
  format(): string;
  split(): string[];
}

interface NumberContainer {
  value: number;
  nearestPrime(): number;
  round(): number;
}

type Item<T> = {
  id: T,
  container: T extends string ? StringContainer : NumberContainer;
}

let item: Item<string> = {
  id: "a23d",
  container: null
}

type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

/**
 * 1. distribute -> never | never | string[] | number[]
 * 2. "never" is ignored -> string[] | number[]
 */

interface Book {
  id: string;
  tableOfContents: string[];
}

interface Tv {
  id: number;
  diagonal: number;
}

interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv;
}

let itemService: IItemService;

const book = itemService.getItem("10");
const tv = itemService.getItem(10);
