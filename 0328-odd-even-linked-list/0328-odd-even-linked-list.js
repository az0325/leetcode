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
var oddEvenList = function(head) {
    // 예외처리
    if(!head || !head.next) return head
    
    let odd = head
    let even = head.next

    // even 위치 변경으로 인해 기억 저장
    const evenHead = head.next

    while(odd.next && odd.next.next){
        const oddNext = odd.next
        const oddNextNext = oddNext.next

        const evenNext = even.next
        const evenNextNext = evenNext.next

        odd.next = oddNext.next
        even.next = evenNext.next

        odd = oddNextNext
        even = evenNextNext
    }

    odd.next = evenHead
    return head
};