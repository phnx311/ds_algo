//implement a Queue using two stacks
class Stack {

    constructor() {
        this.items = [];
    }

    pop() {
        return this.items.pop();
    }

    push(item) {
        this.items.push(item);
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    length() {
        return this.items.length;
    }
}

class QueueTwoStacks {

    constructor() {
        this.inStack = new Stack;
        this.outStack = new Stack;
    }

    enqueue(item) {
        this.inStack.push(item); 
    }

    dequeue() {
        if (this.outStack.length === 0) {

            while(this.inStack.length > 0) {
                const popped = this.inStack.pop();
                this.outStack.push(popped);
            }

            if(this.outStack.length === 0) {
                throw new Error('Cannot dequeu from an empty queue')
            }

        }

        return this.outStack.pop();
    }
}

const queue = new QueueTwoStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
console.log(queue.dequeue());