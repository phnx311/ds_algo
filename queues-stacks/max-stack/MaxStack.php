<?php

    class Stack 
    {
        public $items = [];
        public $length;

        public function __construct()
        {
            $this->length = count($this->items);  
        }

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
        public $items;

        public function __construct()
        {
            $this->stack = new Stack;
            $this->maxStack = new Stack;
            $this->items = $this->stack->items;
        }

        public function push($item)
        {
            if ($this->maxStack->length === 0 || $item > $this->maxStack->peek()) {
                $this->maxStack->push($item);
            }
            $this->stack->push($item);
        }

        public function pop()
        {
            if ($this->stack->length === 0) {
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
            if ($this->maxStack->length > 0) {
                return $this->maxStack->peek();
            } else {
                return null;
            }
        }

    }

    $maxStack = new MaxStack();
    $maxStack->push(1);
    var_dump($maxStack->items);
    $maxStack->push(2);
    var_dump($maxStack->items);
    $maxStack->push(3);
    var_dump($maxStack->items);
    var_dump($maxStack->getMax());
?>