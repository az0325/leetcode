/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []

    const dfs = (index, arr) => {
        // index가 arr의 길이와 같아지면 결과값에 푸시해준다.
        if (index === arr.length) {		   
            return result.push([...arr]);
        }

        for (let j = index; j < arr.length; j++) {
            [arr[index], arr[j]] = [arr[j], arr[index]]; // swap
            // swap한 범위를 가지고 dfs해준다.
            dfs(index + 1, arr); // 이때, i는 픽스되고 i를 뺀 나머지 값을 전달한다.
            // swap back
            [arr[index], arr[j]] = [arr[j], arr[index]]; // swap했던 arr를 원상복귀 해주며 깊이에서 빠져나온다.
        }
    }


    dfs(0, nums);
    return result
};