/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 투 포인터 - 중앙을 중심으로 확장
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]){
            // 오른쪽 왼쪽 값이 같으면 양옆으로 한칸씩 이동
            left--;
            right++;
        }

        return s.slice(left + 1, right)
    }

    // 예외처리
    const reverseText = s.split("").reverse().join("")
    if(s.length < 2 || s === reverseText){
        return s
    }
    
    let result = ""
    for(let i = 0; i < s.length - 1; i++){
        const twoSides = expand(i, i + 1)
        const threeSides = expand(i, i + 2)
        const list = [result, twoSides, threeSides]
        result = list.reduce((a, b) => a.length >= b.length ? a : b);
    }

    return result
};