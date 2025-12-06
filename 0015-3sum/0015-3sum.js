/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)

    const result = []

    for(let i = 0; i < nums.length - 2; i++){
        // 중복 값 스킵
        if(i > 0 && nums[i] === nums[i - 1]){
            continue
        }

        let left = i + 1
        let right = nums.length - 1

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]

            if(sum < 0) {
                left += 1
            } else if(sum > 0) {
                right -= 1
            } else {
                result.push([nums[i], nums[left], nums[right]])

                // 동일한 숫자가 있을수 있기 때문에 한칸씩 지나가면서 확인 및 처리
                while (left < right && nums[left] === nums[left + 1]) {
                    left += 1
                }

                while (left < right && nums[right] === nums[right - 1]) {
                    right -= 1
                }

                left += 1
                right -= 1
            }
        }
    }

    console.log(result)
    return result
};