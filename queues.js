//from https://www.geeksforgeeks.org/implementation-queue-javascript/
// Queue class
class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // enqueue function
  enqueue(element) {
    // adding element to the queue : we add to the 'end' of the array/queue
    this.items.push(element);
  }
  // dequeue function
  dequeue() {
    // removing element from the queue : we remove from the 'front' of the array/queue as this was the first item created
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  // front function
  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  // isEmpty function
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
  // printQueue function
  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
// end class

// creating object for queue class
var queue = new Queue();

console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.printQueue());

// // Testing dequeue and pop on an empty queue
// // returns Underflow
// console.log(queue.dequeue());

// // returns true
// console.log(queue.isEmpty());

// // Adding elements to the queue
// // queue contains [10, 20, 30, 40, 50]
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);

// // returns 10
// console.log(queue.front());

// // removes 10 from the queue
// // queue contains [20, 30, 40, 50, 60]
// console.log(queue.dequeue());

// // returns 20
// console.log(queue.front());

// // removes 20
// // queue contains [30, 40, 50, 60]
// console.log(queue.dequeue());

// // printing the elements of the queue
// // prints [30, 40, 50, 60]
// console.log(queue.printQueue());
