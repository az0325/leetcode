/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 저점에 사서 고점에 팔기
    // 최대값과 최소값

    let profit = 0
    let minPrice = 9999

    prices.forEach(price => {
        minPrice = Math.min(minPrice, price)
        profit = Math.max(profit, price - minPrice)
    })

    return profit
};