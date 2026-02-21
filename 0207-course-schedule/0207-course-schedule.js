/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    for (const [course, pre] of prerequisites) {
        adj[pre].push(course);
    }

    const status = new Array(numCourses).fill(0); // 0:안가봄, 1:조사중, 2:완료

    const dfs = (v) => {
        if (status[v] === 1) return true;
        if (status[v] === 2) return false;

        status[v] = 1; // 입장 표시

        // 여기서 갈림길을 하나씩 확인합니다.
        for (let neighbor of adj[v]) {
            if (dfs(neighbor)) return true;
        }

        status[v] = 2; // 완료 표시 (초록불)
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        // 어느 한 곳에서라도 사이클이 발견되면 수강 불가능(false)
        if (dfs(i)) return false;
    }

    return true
};