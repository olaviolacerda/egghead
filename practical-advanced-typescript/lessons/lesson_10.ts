// conditional types to ceate reusable flatten type
const numbers = [2, 1];

const someObject = {
  id: 21,
  name: 'Jonathan'
}

const someBoolean = true;

// type FlattenArray<T extends any[]> = T[number];
// type FlattenObject<T extends object> = T[keyof T];

type Flatten<T> = T extends any[] ? T[number] :
  T extends object ? T[keyof T] :
  T;

type NumbersArrayFlattened = Flatten<typeof numbers>;
type SomeObjectFlattened = Flatten<typeof someObject>;
type someBooleanFlattened = Flatten<typeof someBoolean>;
