/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
  
  	// 같은 실행을 반복해야 하고, 조합 배열에 대해 공유가 일어나야 하기 때문에 전체적인 흐름은 재귀문을 이용한다.
    // parameter로 조합의 첫 번째 요소와 조합 배열을 전달한다. 
    function bfs(first, array) { 
        // 조합 배열의 원소 수가 k인지 확인하여 반환할 배열에 추가한다.
        if (array.length === k) { 
            result.push([...array]);
            return;
        }

        for (let i = first; i <= n; i++) {
            // 모든 요소를 확인하여 조합을 생성한다.
            array.push(i);
            
            // 조합의 첫 번째 요소가 설정되면 그 다음 요소들에 대해 재귀적으로 조합을 생성한다.
            bfs(i + 1, array); 
            
            // 조합 배열에서 요소를 하나씩 제거하여 현재 요소와 다른 모든 요소에 대한 조합을 생성 가능하게 공간을 설정한다. 
            array.pop(); 
        }

        return;
    }

    bfs(1, []);

    return result;
};