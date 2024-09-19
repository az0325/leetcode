/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // 영어와 숫자를 제외한 모든 단어 제거
    const regex = new RegExp(/[^0-9a-zA-Z]/g);

    // 소문자 혹은 대문자로 통일
    const list = s.replace(regex, '').toLowerCase()

    // 뒤집은 배열이랑 같은지 확인
    const reverseList = list.split('').reverse().join('')
    return list === reverseList
};