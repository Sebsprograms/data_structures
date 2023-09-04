// Challenge: Create an implementation of a Linked list with menthods:
// append, prepend, insert, remove (delete)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    formattedData() {
        const formattedArray = [];
        let currentNode = this.head;

        while (currentNode != null) {
            formattedArray.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return formattedArray;
    }

    traverseToIndex(index) {
        if (index < 0 || index > this.length) {
            throw new RangeError(`${index} is out of range on a linked list of length: ${this.length}`);
        }
        let count = 0;
        let currentNode = this.head;

        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    insert(index, value) {
        // Add to the end if index is out of range or === length -1
        if (index >= this.length - 1) {
            this.append(value);
        }
        if (index == 0) {
            this.prepend(value);
        }

        const newNode = new Node(value)
        const currentNodeAtIndex = this.traverseToIndex(index - 1);
        newNode.next = currentNodeAtIndex.next;
        currentNodeAtIndex.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index > this.length) index = this.length;
        if (index < 0) index = 0;
        if (index == 0) {
            this.head = this.head.next;
            return;
            this.length--;
        }
        const before = this.traverseToIndex(index);
        before.next = before.next.next;
        this.length--;
    }

    // Challenge: Implement reverse()
    reverse() {
        // Start with the head
        let currentNode = this.head;
        // The head will now be the tail
        this.tail = currentNode;
        // Before the head is null
        let prevNode = null;

        // While the current node is not the tail
        while (currentNode.next !== null) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        // Current node is the head
        currentNode.next = prevNode;
        this.head = currentNode;
    }
}


const myLinkedList = new LinkedList(3);
myLinkedList.append(2);
myLinkedList.append(1);
console.log(myLinkedList);
myLinkedList.reverse();
console.log(myLinkedList);