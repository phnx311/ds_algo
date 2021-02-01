class BinaryTreeNode {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
    insertLeft(value) {
      this.left = new BinaryTreeNode(value)
      return this.left
    }
    insertRight(value) {
      this.right = new BinaryTreeNode(value)
      return this.right
    }
}

//assumption is that we have a binary search tree
/**
 * @param {BinaryTreeNode} rootNode
 * @returns integer  
 */
function findLargest(rootNode) {
    if (!rootNode) {
      throw new Error('Tree must have at least 1 node');
    }
    if (rootNode.right) {
      return findLargest(rootNode.right);
    }
    return rootNode.value;
}

function findSecondLargest(rootNode) {
    if (!rootNode || (!rootNode.left && !rootNode.right)) {
      throw new Error('Tree must have at least 2 nodes');
    }
  
    // Case: we're currently at largest, and largest has a left subtree,
    // so 2nd largest is largest in said subtree
    if (rootNode.left && !rootNode.right) {
      return findLargest(rootNode.left);
    }
  
    // Case: we're at parent of largest, and largest has no left subtree,
    // so 2nd largest must be current node
    if (
      rootNode.right
      && !rootNode.right.left
      && !rootNode.right.right
    ) {
      return rootNode.value;
    }
  
    // Otherwise: step right
    return findSecondLargest(rootNode.right);
  }

  //the space complexity can be brought down to 0(1) by replacing the recursive call at the end with a while loop

//   function findLargest(rootNode) {
//     let current = rootNode;
//     while (current) {
//       if (!current.right) return current.value;
//       current = current.right;
//     }
//   }
  
//   function findSecondLargest(rootNode) {
//     if (!rootNode || (!rootNode.left && !rootNode.right)) {
//       throw new Error('Tree must have at least 2 nodes');
//     }
  
//     let current = rootNode;
  
//     while (current) {
  
//       // Case: current is largest and has a left subtree
//       // 2nd largest is the largest in that subtree
//       if (current.left && !current.right) {
//         return findLargest(current.left);
//       }
  
//       // Case: current is parent of largest, and largest has no children,
//       // so current is 2nd largest
//       if (
//         current.right
//         && !current.right.left
//         && !current.right.right
//       ) {
//         return current.value;
//       }
  
//       current = current.right;
//     }
//   }