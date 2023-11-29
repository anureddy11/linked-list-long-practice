// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // Your code here
        let length =1
        if(!this.head){
            return 0
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
            length++
        }
        return length

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        if(!this.head){
            return 0
        }
        let curr = this.head;
        let sum = this.head.value
        while (curr.next) {
            curr = curr.next;
            sum+=curr.value
        }
        return sum

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        let length =1
        if(!this.head){
            return 0
        }
        let curr = this.head;
        let sum = this.head.value
        while (curr.next) {
            curr = curr.next;
            sum+=curr.value
            length++
        }
        return sum/length

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        if(!this.head){
            return undefined
        }
        else if(n===0){
            return this.head.value
        }
        else{
            let curr = this.head;
            let index = 0
            while (index<n) {
                curr = curr.next;
                index++
            }

        return curr
        }



        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        if (!this.head) {
            return undefined;
        }

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;


        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        // Your code here
        let reversedList = new SinglyLinkedList
        if(!this.head){
            return undefined
        }
        let curr = this.head
        while (curr) {
            const newNode = new SinglyLinkedNode(curr.value)
            newNode.next = reversedList.head
            reversedList.head = newNode
            curr=curr.next
        }
        return reversedList



        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        if (!this.head || !this.head.next) {
            // If the list is empty or has only one node, no need to reverse
            return
        }
        let prev = null
        let current = this.head
        let nextNode = null

        while(current){
            nextNode = current.next
            current.next = prev
            prev=current
            current = nextNode

        }

        this.head = prev

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let tempStart = this.head
        let tempEnd = this.tail
        while(tempStart !== tempEnd && tempStart.next!==tempEnd){
            tempStart = tempStart.next
            tempEnd = tempEnd.prev

            }
            return tempStart
        }


        // Write your hypothesis on the time complexity of this method here
    

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
