<?php 

class Stack 
{
    private $items = [];
    
    public function push($item) 
    {
        $this->items[] = $item;
    }

    public function length() 
    {
        return count($this->items);
    }

    public function pop()
    {
        if(!count($this->items)) {
            return null;
        }

        return array_pop($this->items);
    }

    public function peek()
    {
        if(!count($this->items)) {
            return null;
        }
        return $this->items[count($this->items) - 1];
    }
}

class QueueTwoStacks 
{
    public function __construct()
    {
        $this->inStack = new Stack();
        $this->outStack = new Stack();
    }

    public function enqueue($item) {
        $this->inStack->push($item);
    }

    public function dequeue() {

        if ($this->outStack->length() === 0) {

            while($this->inStack->length() > 0) {
                $popped = $this->inStack->pop();
                $this->outStack->push($popped);
            }

            if ($this->outStack->length() === 0) {
                Throw new UnderflowException();
            }

        }

        return $this->outStack->pop();
    }

}

$queue = new QueueTwoStacks();
$queue->enqueue(1);
$queue->enqueue(2);
$queue->dequeue();
$queue->enqueue(3);
var_dump($queue->dequeue()); //2
?>