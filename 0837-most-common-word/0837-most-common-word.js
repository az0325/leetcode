/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // 객체 - key: 단어, value: 갯수
    const data = {}

    const list = paragraph.replace(/[^a-zA-Z]/g, ' ').toLowerCase().split(" ")
    list.forEach(item => {
        if(!item) return

        if(data[item]) data[item] = data[item] + 1
        else data[item] = 1
    })

    // value 기준으로 정렬
    const sortByValue = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .filter(item => !banned.includes(item[0]))

    return sortByValue[0][0]
};