class BTNode {
    constructor(value) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor () {
        this.root = null;
    }
    add (value) {
        if(this.root) {
            let runner = this.root;  //runner become new root
            while (runner) {
                if(value > runner.value) {  // if value is less than current runner value than go to the right
                    if (runner.right) {
                        runner = runner.right; //runner stays the same I think
                    } else {
                        runner.right = new BTNode(value);
                        return this;
                    }
                } else {
                    if(runner.left) {
                        runner = runner.left; // runner is on the left I think
                    } else {
                        runner.left = BTNode(value); //put new node on the left side since its bigger than current this node
                        return this;
                    }
                }
            }
        }
        this.root = new BTNode(value);
        return this;
    }
}