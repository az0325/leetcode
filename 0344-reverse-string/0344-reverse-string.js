/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // 투포인터 방식
    // 오른쪽에서 시작하는 index
    let rightIndex = s.length - 1

    // 왼쪽에서 시작하는 index
    let leftIndex = 0

    // 왼쪽이 오른쪽보다 작을때 까지 까지 반복 (두 포인터가 교차기 전 까지)
    while(leftIndex < rightIndex){
        const dummy = s[leftIndex]
        s[leftIndex] = s[rightIndex]
        s[rightIndex] = dummy
        
        leftIndex++
        rightIndex--
    }

    return s
};