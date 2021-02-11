//first lets define a BinaryTreeNode

class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    insertLeft(leftValue) {    
        this.left = leftValue
        return this.left
    }

    insertRight(rightValue) {
        this.right = rightValue
        return this.right
    }
}

//review depth first and breadth first traversal
