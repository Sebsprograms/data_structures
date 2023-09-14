class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        if (this.length === 1) {
            this.last = null;
        }
        const first = this.first;
        this.first = this.first.next;
        this.length--;
        return first;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myQueue = new Queue();

myQueue.enqueue('google');
myQueue.enqueue('lol');

console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());