const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        
        if (this.length === 0) {
            this._head = node;
            this._tail = node;      
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index >= 0 && index < this.length) {
            let currentNode = this._head;
            
            for (let i = 0; i != index; i++) {
                currentNode = currentNode.next;
            }

            return currentNode.data;
        }
    }

    insertAt(index, data) {}

    isEmpty() {
        return this.length === 0;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {
        let currentNode = this._head;

        for (let i = 0; i < this.length; i++) {
            if (currentNode.data === data) {
                return i;
            }
            
            currentNode = currentNode.next;
        }
    }
}

module.exports = LinkedList;
