
// Switch statements

// Action
interface Action {
  type: string;
}

class Add implements Action {
  // using readonly we could tell TS to infer the type of the string
  readonly type = "Add";
  constructor(public payload: string) { };
}

class RemoveAll implements Action {
  readonly type = "Remove All";
}

class RemoveOne implements Action {
  readonly type = "Remove One";
  constructor(public payload: number) { };
}

type TodoActions = Add | RemoveAll | RemoveOne;


// Reducer

interface ITodoState {
  todos: string[];
}

function todoReducer(
  action: TodoActions,
  state: ITodoState = { todos: [] }
): ITodoState {
  switch (action.type) {
    case "Add": {
      return {
        todos: [...state.todos, action.payload]
      };
    }
    case "Remove All": {
      return {
        todos: []
      };
    }
    case "Remove One": {
      return {
        todos: state.todos.slice().splice(action.payload, "");
      };
    }
    default: {
      const x: never = action;
    }
  }
  return state;
}
