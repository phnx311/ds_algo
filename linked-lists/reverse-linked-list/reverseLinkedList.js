class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * @param {LinkedListNode} headOfList - The head of a LinkedListNode
 * @returns {LinkedListNode} - Returns the new head of the reversed LinkedList
 */

function reverse(headOfList) {
    let currentNode = headOfList;
    let previousNode = null;
    let nextNode = null;
  
    // Until we have 'fallen off' the end of the list
    while (currentNode) {
  
      // Copy a pointer to the next element
      // before we overwrite currentNode.next
      nextNode = currentNode.next;
  
      // Reverse the 'next' pointer
      currentNode.next = previousNode;
  
      // Step forward in the list
      previousNode = currentNode;
      currentNode = nextNode;
    }
  
    return previousNode;
  }
  

