/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let minPrice = Infinity

    prices.forEach(price => {
        minPrice = Math.min(minPrice, price)
        profit = Math.max(profit, price - minPrice)
    })

    return profit
};