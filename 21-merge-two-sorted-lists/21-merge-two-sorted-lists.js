/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2)  {
    // if(!l1) return l2;
    // else if(!l2) return l1;
    // const [minNode, maxNode] = l1.val > l2.val ? [l2, l1] : [l1, l2];
    // return new ListNode(minNode.val, mergeTwoLists(minNode.next, maxNode));
    //----------------------------------------
    let list = new ListNode();
    let head = list;
    
    while (l1 !== null && l2 !== null){
        if (l1.val < l2.val){
            list.next = l1;
            l1 = l1.next;
            
        }else{
            list.next = l2;
            l2 = l2.next;
        }
        
        list = list.next;
    }
    if (l1 !== null){
        list.next = l1;
    }
    if (l2 !== null){
        list.next =l2;
    }
    return head.next;
    
};