/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []

    const dfs = (start, visited) => {
        result.push(visited)

        for(let i = start; i < nums.length; i++){
            dfs(i + 1, [...visited, nums[i]])
        }
    }

    dfs(0, [])
    return result
};