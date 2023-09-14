
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
    }

    pop() {
        if (this.isEmpty()) return null;
        if (this.length === 1) {
            this.bottom = null;
        }
        const top = this.top;
        this.top = this.top.next;
        this.length--;
        return top;
    }

    isEmpty() {
        return this.length === 0;
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