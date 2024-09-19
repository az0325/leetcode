/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 객체 {[단어] : [갯수]}
    const data = {}

    // 단어 하나씩 정렬
    strs.forEach(item => {
        const sortData = item.split("").sort().join("")
        if(data[sortData]) data[sortData] = [...data[sortData], item]
        else data[sortData] = [item]
    })

    return Object.entries(data).map(item => item[1])
};