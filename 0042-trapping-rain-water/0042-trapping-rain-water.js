/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(!height.length) return 0

    let result = 0

    // 투포인터
    let left = 0
    let right = height.length - 1

    let leftLevel = height[left]
    let rightLevel = height[right]

    while (left < right) {
        leftLevel = Math.max(height[left], leftLevel)
        rightLevel = Math.max(height[right], rightLevel)

        // 좌, 우 중 더 높은쪽을 향해 이동
        if(leftLevel <= rightLevel){
            result += leftLevel - height[left]
            left += 1
        } else {
            result += rightLevel - height[right]
            right -=1
        }
    }
    
    return result
};