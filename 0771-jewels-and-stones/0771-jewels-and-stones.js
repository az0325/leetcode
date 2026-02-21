/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // stones가 갖고잇는 단어 중 jewels에 해당하는게 몇개인지

    const map = {}
    stones.split('').forEach(stone => {
        if(map[stone]){
            map[stone] += 1
        } else{
            map[stone] = 1
        }
    })

    let result = 0

    jewels.split('').forEach(jewel => {
        if(map[jewel]) {
            result += map[jewel]
        }
    })

    return result
};