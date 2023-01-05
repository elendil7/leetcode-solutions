/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let linkedList = null
    let carry = 0

    while(l1 || l2){
        let digit1 = 0, digit2 = 0

        if(l1){
            digit1 += l1.val
            l1 = l1.next
        }
        if(l2){
            digit2 += l2.val
            l2 = l2.next
        }

        const sum = digit1 + digit2 + carry

        carry = Math.floor(sum / 10)

        if(linkedList){
            const nextNode = new ListNode(sum % 10)
            let curNode = linkedList

            while(curNode.next) curNode = curNode.next

            curNode.next = nextNode
        }else{
            linkedList = new ListNode(sum % 10)
        }
    }
    
    if(carry > 0){
        const nextNode = new ListNode(carry)
        let curNode = linkedList
        while(curNode.next) curNode = curNode.next
        curNode.next = nextNode
    }

    return linkedList
};
