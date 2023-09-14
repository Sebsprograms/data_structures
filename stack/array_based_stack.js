// Challenge: Implement a stack using an array

class Stack {
    constructor() {
        this.stack = [];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('lol');
myStack.push('github copilot is a genious');

console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.push('Money');
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.bottom);