const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        // Your code here
        const newNode = new SinglyLinkedNode(val); // Create a new node with the given value

        if (this.length===0) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next=newNode
            this.tail=newNode
        }

        this.length += 1; // Increment the length of the list
        return this.length



        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        // Your code here
        let removedNode = this.head
        if (!this.head){
            return null
        }
        else if(this.length===1){
            this.head = null
            this.tail = null
        }
        else{

            this.head = this.head.next
        }

        this.length--
        return removedNode.value


        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
