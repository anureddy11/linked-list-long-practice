// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val)
        newNode.next = this.head
        this.head = newNode
        this.length += 1
        return this
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val); // Create a new node with the given value

        if (!this.head) { // If the list is empty, make the new node the head
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) { // Traverse the list to find the current tail node
                temp = temp.next;
            }
            temp.next = newNode; // Set the new node as the next node of the current tail
        }

        this.length += 1; // Increment the length of the list
        return this

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if (!this.head){
            return undefined
        }
        let removedNode = this.head
        this.head = this.head.next
        this.length--
        return removedNode

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if(!this.head){
            return undefined
        }
        else if(!this.head.next){
            let removedNode = this.head
            this.head = null
            this.length --
            return removedNode

        }
        else{
            let temp = this.head
            while(temp.next.next){
                temp = this.head.next
            }
            let removedNode = temp.next
            temp.next = null
            this.length --
            return removedNode
        }


        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
        if(!this.head){
            return undefined
        }
        return this.head.value

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here
        if(!this.head){
            return undefined
        }
        else{
            let temp = this.head
            while(temp){
                console.log(temp.value)
                temp=temp.next
            }
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
