/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let index = 0
    let tempDataStruct = []
    let result = []

    function bfs(index, target, tempDataStruct) {
        if(target === 0) {
            result.push([...tempDataStruct])
            return
        }
    
        if(target < 0) return;
    
        for(let i=index; i<candidates.length; i++) {
            tempDataStruct.push(candidates[i])
            bfs(i, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    
    bfs(index, target, tempDataStruct)
    return result;
};