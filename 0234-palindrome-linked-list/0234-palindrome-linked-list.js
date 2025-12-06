/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 리스트로 변환
    const list = []

    let node = head
    while(node) {
        list.push(node.val)
        node = node.next
    }

    return JSON.stringify(list) === JSON.stringify(list.reverse())
};