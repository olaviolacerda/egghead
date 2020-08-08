// mark all the properties of a type as readonly

interface IEmail {
  from: string;
  to: string[];
  body: string;
}

interface ITodo {
  isCompleted: boolean;
  text: string;
  linkedEmail: IEmail;
}

interface IRootState {
  userId: string;
  showCompletedOnly: boolean;
  todoTypes: string[];
  todos: ITodo[];
  iconGrid: string[][];
}

type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }

type DeepReadonly<T> =
  T extends (infer E)[] ?
  ReadonlyArray<DeepReadonlyObject<E>> :
  T extends object ? DeepReadonlyObject<T> :
  T;

type IReadonlyRootState = DeepReadonly<IRootState>;

function rootReducer(action: any, state: IRootState): IRootState {
  // case action 1...
  // case action 2...
  return state;
}

let state: IReadonlyRootState;

state.showCompletedOnly = true;
state.userId = "19";
state.todoTypes = [];
state.todoTypes[0] = "some type"

state.todoTypes.map(todo => todo.toUpperCase()); // this is not possible using DeepReadonlyObject