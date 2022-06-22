/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
//     let current = head;
//     let length = 0;
//     let index = 0;
    
//     while(current!==null){
//         length++;
//         current = current.next;
//     }
//     middle = Math.floor(length/2);
//     current = head;
//     while(index<middle){
//         current = current.next;
//         index++
//     }
//     return current;
    //---------------------pointer
    
    if (head===null) return null;
    let slow = head;
    let fast = head;
    
    while (fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};