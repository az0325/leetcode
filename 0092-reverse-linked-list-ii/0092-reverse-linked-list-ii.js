/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 예외처리
    if(!head || !head.next || left === right) return head

    const dummy = new ListNode(0, head)
    let startPrev = dummy

    // start 찾기
    for(let i = 1; i < left; i++) {
        startPrev = startPrev.next
    }

    // startPrev : 뒤집힌 결과를 항상 이 노드 뒤에 붙혀야 되기 때문에 값 고정

    let curr = startPrev.next

    for(let i = 0; i < right - left; i++) {
        const temp = curr.next
        curr.next = temp.next
        temp.next = startPrev.next
        startPrev.next = temp
    }

    return dummy.next
};