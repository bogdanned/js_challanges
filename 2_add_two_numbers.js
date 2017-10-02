// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
//  Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero,
// except the number 0 itself.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

let l1 = [
  {
    val: 2
    next: 2
  }
]

let l2 = [

]

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  l1.reduce((a, b, index)=> (a + b.val * (100 ^index)),0)

  let num1 =
};
