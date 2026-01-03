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
var mergeTwoLists = function(list1, list2) {
    // 예외처리 : list1이나 list2없을 경우
    if(!list1) return list2
    if(!list2) return list1

    const result = new ListNode(0, null)
    let cursor = result

    while(list1 && list2){
        if(list1.val <= list2.val){
            cursor.next = list1
            list1 = list1.next
        } else {
            cursor.next = list2
            list2 = list2.next
        }

        // 한 싸이클 돌면 다음걸로 넘겨주기
        cursor = cursor.next;
    }

    // 마지막에 남은거 하나 추가
    cursor.next = list1 || list2;

    // 처음에 추가한 0 제외
    return result.next
};