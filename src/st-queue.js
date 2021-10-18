const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// module.exports = class Queue {
//   constructor() {
//     // this.value = value;
//     this.queue = null;
//     this.last = null;
//     this.length = 0;
//   }
//   getUnderlyingList() {
//     return this.head;
//   }

//   enqueue(a) {
//     if (this.length === 0) {
//       this.last = new ListNode(a);
//     } else {
//       let current = this.last;

//       // move to the last node
//       while(current.next) {
//         current = current.next;
//       }

//       current.next = new ListNode(a);
//     }

//     this.length++;
//   }

//   dequeue() {
//     return this.queue.shift();
//   }

// }




module.exports = class Queue {
  constructor() {
    this.queue = [];
  }
  getUnderlyingList() {
    // let oldList = new Map();
    // for(let i = this.queue.length - 1; i > 0 ; i--) {
    //   let list = {
    //       value: this.queue[i],
    //       next: oldList
    //     }
    //     oldList = list;
    // }
    
    return list;
  }

  enqueue(a) {
    this.queue.push(a);
  }

  dequeue() {
    return this.queue.shift();
  }

}