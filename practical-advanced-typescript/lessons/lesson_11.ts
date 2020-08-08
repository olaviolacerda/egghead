// generic function parameter

function generateId(seed: number) {
  return seed + 5;
}

// TS auto infers the type, so it won't compile
const id: string = generateId(10);

const someId: number = generateId(5);


function lookupEntity(id: string) {

}

lookupEntity(generateId(10)); // the infers dies

/**
 * we can create a type to fix this
 */

// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Id = ReturnType<typeof generateId>;

type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
const arr = [Promise.resolve(true)];

type ExpectedBoolean = UnpackPromise<typeof arr>;