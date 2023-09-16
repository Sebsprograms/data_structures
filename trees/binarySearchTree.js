class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                    return this;
                }

                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                    return this;
                }

                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        if (!this.root) return false;

        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) return currentNode;
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(value) {
        // 
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
}
