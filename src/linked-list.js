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
        if (this._head === null) {
            return null;
        }

        return this._head.data;
    }

    tail() {
        if (this._tail === null) {
            return null;
        }

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

    insertAt(index, data) {
        if (index >= 0 && index < this.length) {
            let currentNode = this._head,
                node = new Node(data);

            if (index === 0) {
                node.next = currentNode;
                currentNode.prev = node;
                this._head = node;
            } else {
                for (let i = 0; i !== index; i++) {
                    currentNode = currentNode.next;
                }

                currentNode.prev.next = node;
                node.prev = currentNode.prev;
                node.next = currentNode;
                currentNode.prev = node;
            }

            this.length++; 
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index >= 0 && index < this.length) {
            let currentNode = this._head;

            if (index === 0) {
                this._head = currentNode.next;

                if (!this._head) {
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }

            } else if (index === this.length - 1) {
                currentNode = this._tail;
                this._tail = currentNode.prev;
                this._tail.next = null;
            } else {
                for (let i = 0; i != index; i++) {
                    currentNode = currentNode.next;
                }

                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
            }

            this.length--;
        }
    }

    reverse() {
        let currentNode = this._head,
            tempNode;

        while (currentNode !== null) {
            tempNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = tempNode;
            currentNode = currentNode.prev;
        }

        tempNode = this._head;
        this._head = this._tail;
        this._tail = tempNode;
    }

    indexOf(data) {
        let currentNode = this._head;

        for (let i = 0; i < this.length; i++) {
            if (currentNode.data === data) {
                return i;
            }

            currentNode = currentNode.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
