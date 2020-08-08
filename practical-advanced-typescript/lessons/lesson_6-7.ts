// iteration of custom data structures

interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;
}

let node: LinkedListNode<string>;
//could be infinite

interface Action {
  type: string;
}

interface ListNode<T> {
  value: T;
  next: ListNode<T>;
  prev: ListNode<T>;
}

class BackwardsActionIterator implements IterableIterator<Action>{
  constructor(private _currentActionNode: ListNode<Action>) {

  }

  [Symbol.iterator](): IterableIterator<Action> {
    return this;
  }

  next(): IteratorResult<Action> {
    const curr = this._currentActionNode;
    if (!curr || !curr.value) {
      return { value: null, done: true };
    }
    //1. move through each item in the list
    this._currentActionNode = curr.prev;
    //2. return each item
    return { value: curr.value, done: false }
  }
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };
let action3 = { type: "DISPLAY_POSTS" };
let action4 = { type: "LOGOUT" };


let actionNode1: ListNode<Action> = {
  value: action1,
  next: null,
  prev: null
};

let actionNode2: ListNode<Action> = {
  value: action2,
  next: null,
  prev: actionNode1
};

let actionNode3: ListNode<Action> = {
  value: action3,
  next: null,
  prev: actionNode2
};

let actionNode4: ListNode<Action> = {
  value: action4,
  next: null,
  prev: actionNode3
};

actionNode1.next = actionNode2;
actionNode2.next = actionNode3;
actionNode3.next = actionNode4;

// bad, you have to care about the size and if you can iterate over
// let currentNode = actionNode2;

// do {
//   console.log(currentNode.value);
//   currentNode = currentNode.prev;
// } while (currentNode.value);

const backwardsActionIteratorList = new BackwardsActionIterator(
  actionNode4
);

for (let action of backwardsActionIteratorList) {
  console.log(action.type);
}


