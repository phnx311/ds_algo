<?php
class LinkedListNode 
{
    private $value;
    private $next;

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function getNext() 
    {
        return $this->next;
    }

    public function setNext($next) 
    {
        $this->next = $next;
    }

    public function setValue($value) 
    {
        $this->value = $value;
    }

    public function getValue()
    {
        return $this->value;
    }
}

/**
 * @param LinkedListNode $linkedListHead 
 * @return LinkedListNode 
 */
function reverse($linkedListHead) 
{
    $currentNode = $linkedListHead;
    $prevNode = null;
    $nextNode = null;

    while($currentNode) 
    {
        $nextNode = $currentNode->getNext();

        $currentNode->setNext($prevNode);

        $prevNode = $currentNode;
        $currentNode = $nextNode;
    }

    return $prevNode;
}
?>