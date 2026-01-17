/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    // 맨 처음 하나만 놔두고 나머지는 중복 제거

    const remember = new Set(s)
    const stack = []

    const counter = {} // 해당 문자가 몇개 있는지
    s.split('').forEach(item => {
        if(counter[item]) counter[item] += 1
        else counter[item] = 1
    })

    for(let letter of s){
        counter[letter] -= 1
        if(stack.includes(letter)) continue; // 뒤에 더 있다는 말

        // 단어가 남아있을 때 까지 뽑기
        while (stack.length &&
        letter < stack[stack.length - 1] &&
        counter[stack[stack.length - 1]] > 0) {
            stack.pop();
        }

        stack.push(letter);
    }

    return stack.join('')
};