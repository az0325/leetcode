/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    const letters = []
    const digits = []

    // 1번째 (0번째는 식별자) 단어를 보고 숫자인지 단어인지 구분
    logs.forEach(item => isNaN(item.split(" ")[1]) ? letters.push(item) : digits.push(item))

    const sortLetters = letters.sort((a, b) => {
        const aSubstring = a.split(" ").slice(1).join(" ");
        const bSubstring = b.split(" ").slice(1).join(" ");

        // 식별자가 다른 경우
        if (aSubstring !== bSubstring) return aSubstring.localeCompare(bSubstring)

        // 식별자가 같은 경우
        return a.split(" ")[0].localeCompare(b.split(" ")[0])
    })

    return [...sortLetters, ...digits]
};