/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [start, end, weight] of times) {
        adj[start].push([end, weight]); // [출발점, 도착점, 가중치]
    }

    // 무한으로 초기값 설정
    const dist = new Array(n + 1).fill(Infinity)

    // 시작은 0
    dist[k] = 0

    // 우선순위 큐 역할
    const pq = [[k, 0]]; // [현재 노드, 현재까지의 거리]

    while (pq.length > 0) {
        // 현재 가장 거리가 짧은 노드 꺼내기
        pq.sort((a, b) => a[1] - b[1]);
        const [currNode, currDist] = pq.shift();

        // 이미 알고 있는 거리보다 길면 무시
        if (currDist > dist[currNode]) continue;

        // 연결된 주변 노드 확인
        for (const [neighbor, weight] of adj[currNode]) {

            // 다음 거리 미리 계산
            const nextDist = currDist + weight;
            
            // 더 짧은 길을 찾았다면 업데이트
            if (nextDist < dist[neighbor]) {
                dist[neighbor] = nextDist;
                pq.push([neighbor, nextDist]);
            }
        }
    }

    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1; // 한 곳이라도 못 갔다면 실패
        maxTime = Math.max(maxTime, dist[i]);
    }

    return maxTime;
};