/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 짝이 맞는지 확인
    const param = {
        ')': '(', 
        '}': '{',
        ']': '['
    }

    const stack = []
    const list = s.split("")
    
    for(let i = 0; i < list.length; i++){
        const char = list[i]

        // 닫는 괄호일 경우 (param의 key)
        if(param[char]){
            const el = stack.pop()
            if(el !== param[char]){
                return false
            }
        } else {
            // 여는 괄호일 경우 (param의 value)
           stack.push(char)
        }
    }

    return stack.length === 0
};