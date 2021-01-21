// MaxStack will be built off of our Stack implementation
class Stack {

    constructor() {

        //initialize an empty stack
        this.items = [];
    }

    push(item) {
       this.items.push(item); 
    }

    pop() {

        if (!this.items.length) {
            return null;
        }

        this.items.pop(item);
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
    //because we are writing all new pop, push functionality
    //we are taking a 'ahead-of-time' approach here rather than
    //'just-in-time'. so whenever we push or pop we check it against 
    //the last item in maxStack.
    constructor() {
        this.stack = new Stack();
        this.maxStack = new Stack();
    }



    getMax() {

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