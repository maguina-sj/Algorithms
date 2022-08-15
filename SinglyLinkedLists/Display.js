class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(data) {
    let new_node = new Node(data);
    new_node.next = this.head;
    this.head = new_node;
    return this.head;
    }
    removeFront() {
        if(this.head == null) {
            return this.head;
        }
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }
    front() {
        if(this.head ==null) {
            return null;
        } else {
            return this.head.data;
        }
    }
    display() {
        let listStr = "";
        if (this.head == null) {  //edge case
            return "Empty list";
        }
        listStr += this.head.data;  // concatenates the first value in the list
        let runner = this.head.next;
        while(runner != null) {
            listStr += ", " + runner.data;
            runner= runner.next;
        }
        return listStr;
    }
}
let mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
console.log(mySLL.display());