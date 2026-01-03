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
var swapPairs = function(head) {
    // 두개씩 끊어서 스왑

    // 예외처리
    if(!head || !head.next) return head

    const dummy = new ListNode(0, head)

    let prev = dummy

    // prev -> a -> b -> next => prev -> b -> a -> next

    // a or b가 있을 때 까지
    while(prev.next && prev.next.next){
        // 포인터를 잃어버리지 않기 위해서 변수로 선언
        const a = prev.next
        const b = a.next

        // swap
        prev.next = b
        a.next = b.next
        b.next = a

        // prev 이동
        prev = a
    }

    return dummy.next
};