/**
 * Initialize your data structure here.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 124ms
var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  // console.log(this.head, this.tail);
  let c = 0;
  let cursor = this.head;
  while (c < index && cursor) {
    c++;
    cursor = cursor.next;
  }

  if (c === index && cursor) {
    return cursor.val;
  }

  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new ListNode(val);
  node.next = this.head;
  if (!this.head) this.tail = node;
  this.head = node;
  // console.log(this.head, this.tail);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new ListNode(val);
  if (!this.tail) this.head = node;
  this.tail.next = node;
  this.tail = node;
  // console.log(this.head, this.tail);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let c = 0;
  let prev = null;
  let cursor = this.head;
  while (c < index && cursor) {
    c++;
    prev = cursor;
    cursor = cursor.next;
  }
  const node = new ListNode(val);
  // console.log(c, index, prev, cursor);
  if (c === index && prev) {
    prev.next = node;
    node.next = cursor;
    if (this.tail === prev) this.tail = node;
  } else if (index === 0 && c === 0) {
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
  }

  // console.log(this.head, this.tail);
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let c = 0;
  let prev = null;
  let cursor = this.head;
  while (c < index && cursor) {
    c++;
    prev = cursor;
    cursor = cursor.next;
  }
  if (c === index && cursor) {
    if (prev) {
      prev.next = cursor.next;
      if (this.tail === cursor) this.tail = prev;
    } else {
      this.head = this.tail = null;
    }
  }
  // console.log(this.head, this.tail);
};

// list implementation is fatest
// var MyLinkedList = function() {
//   this.list = [];
// };

// /**
//  * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//   return this.list[index] === undefined ? -1 : this.list[index];
// };

// /**
//  * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//   this.list.unshift(val);
// };

// /**
//  * Append a node of value val to the last element of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//   this.list.push(val);
// };

// /**
//  * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//   if (this.list.length >= index) {
//     this.list.splice(index, 0, val);
//   }
// };

// /**
//  * Delete the index-th node in the linked list, if the index is valid.
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//   this.list.splice(index, 1);
// };

// let ll = new MyLinkedList();
// ll.addAtHead(1);
// ll.addAtTail(3);
// ll.addAtIndex(1, 2);
// console.log(ll.get(1));
// ll.deleteAtIndex(1);
// console.log(ll.get(1));
// // [2, 3]

ll = new MyLinkedList();
console.log(ll.get(0));
ll.addAtIndex(1, 2);
console.log(ll.get(0));
console.log(ll.get(1));
ll.addAtIndex(0, 1);
console.log(ll.get(0));
console.log(ll.get(1));
// [-1,-1,-1,1,-1]
