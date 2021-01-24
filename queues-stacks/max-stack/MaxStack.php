<?php

    class Stack 
    {
        private $items = [];
        
        public function push($item) 
        {
            $this->items[] = $item;
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

    class MaxStack 
    {
        private $stack;
        private $maxStack;

        public function __construct()
        {
            $this->stack = new Stack();
            $this->maxStack = new Stack();
        }

        public function push($item)
        {
            if ($this->maxStack->peek() === null || $item >= $this->maxStack->peek()) {
                $this->maxStack->push($item);
            }
            $this->stack->push($item);
        }

        public function pop()
        {
            if (!count($this->stack)) {
                return null;
            } 
            $popped = $this->stack->pop();
            if ($popped === $this->maxStack->peek()) {
                $this->maxStack->pop();
            }
            return $this->stack->pop();
        }

        public function getMax()
        {
            return $this->maxStack->peek();
        }

    }

    $maxStack = new maxStack();
    $maxStack->push(1);
    $maxStack->push(2);
    $maxStack->push(3);
    print($maxStack->getMax());
?>