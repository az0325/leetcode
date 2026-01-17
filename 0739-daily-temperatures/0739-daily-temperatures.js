/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // 입력의 각 날짜에 대해 더 따뜻한 온도까지 기다려야하는 일 수 찾기

    // 일단 다 0으로 채우기
    const result = new Array(temperatures.length).fill(0)

    const stack = []
    
    for(let i = 0; i < temperatures.length; i++){
        // 가장 최근에 스택에 쌓인 온도보다 높은 온도가 나올때 까지 찾기
        while (stack.length && 
        temperatures[stack[stack.length - 1]] < temperatures[i]) { 
            // 현재 인덱스와 스택에서 꺼낸 인덱스의 차이가 기다려하는 일 수 임
            const index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result
};