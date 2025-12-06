/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 자기 자신을 제외하고 왼쪽의 곱셈 결과와 오른쪽의 곱셈 결과를 곱함
    const result = []

    let leftResult = 1
    for(let i = 0; i < nums.length; i++){
        result.push(leftResult)
        leftResult = leftResult * nums[i]
    }

    let rightResult = 1
    for(let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * rightResult
        rightResult = rightResult * nums[i]
    }

    return result
};