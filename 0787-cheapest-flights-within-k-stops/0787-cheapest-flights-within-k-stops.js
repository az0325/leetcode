/**
 * @param {number} n 도시
 * @param {number[][]} flights 비행기
 * @param {number} src 출발
 * @param {number} dst 도착
 * @param {number} k 경유 횟수
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    // BFS
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    for(let i = 0; i <= k; i++) {
        let tempPrices = [...prices];

        for (const [from, to, price] of flights) {
            // 출발지(from)가 아직 도달 불가능한 곳이면 패스
            if (prices[from] === Infinity) continue;

            const nextPrice = prices[from] + price

            // 지름길 발견! (이전 턴의 가격 + 현재 비행기 값)
            if (nextPrice < tempPrices[to]) {
                tempPrices[to] = nextPrice;
            }
        }

        // 한 바퀴(이동 1번) 돌았으니 가격표 업데이트
        prices = tempPrices;
    }

    // 결과: 무한대면 못 간 거고, 아니면 그 가격 리턴
    return prices[dst] === Infinity ? -1 : prices[dst]
};