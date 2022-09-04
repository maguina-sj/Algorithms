class Node {
    constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    }
    }


insert(data)
{
    var newNode = new Node(data);
    if(this.root === null)
        this.root = newNode;
    else
        this.insertNode(this.root, newNode);
}

insertNode(node, newNode) //recursive
{
    /*s
        check if new node is < or > previous node: to choose L or R 
    
        Append it if child is null
        otherwise
        call insertNode( next node, new node) again
    */
    
if ( newNode.data > node.data && node.right === null ) {


}
    


[1,2,3,4,5,6].foreach( num => insert(num) );
