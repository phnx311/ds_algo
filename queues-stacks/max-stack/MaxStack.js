// MaxStack will be built off of our Stack implementation
class Stack {

    constructor() {

        //initialize an empty stack
        this.items = [];
        this.length = this.items.length;
    }

    push(item) {
       this.items.push(item); 
    }

    pop() {

        if (!this.items.length) {
            return null;
        }

        return this.items.pop(item);
    }


    peek() {
        if (!this.items.length) {
            return null;
        }

        return this.items[this.items.length - 1];
    }
}

class MaxStack {
    //we are not extending Stack here, rather using it in our constructor as a ds
    //we are taking a 'ahead-of-time' approach here rather than
    //'just-in-time'. so whenever we push or pop we check it against 
    //the last item in maxStack.
    constructor() {
        this.stack = new Stack();
        this.maxStack = new Stack();
    }

    push(item) {
        //check if it's larger than maxStack last
        const currentMax = this.maxStack.peek();
        if (this.maxStack.length === 0 || item > currentMax) {
            this.maxStack.push(item)
        }
        this.stack.push(item);
    }

    pop() {
        //check if item being popped off stack is a currentMax
        //since maxStack is a condensed version of stack this will work
        const popped = this.stack.pop();
        if (popped === this.maxStack.peek()) {
            this.maxStack.pop();
        }
        return popped;
    }

    getMax() {
        return this.maxStack.peek();
    }
}

//test 

const maxStack = new MaxStack();
maxStack.push(1);
maxStack.push(3);
maxStack.push(5);
const max = maxStack.getMax();
console.log('the max is %s', max); //5
console.assert(maxStack.getMax() === 5, 'the number is %s', max);