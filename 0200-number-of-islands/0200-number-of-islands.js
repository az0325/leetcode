/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // DFS - Stack
    let count = 0 // 섬 갯수
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === '1'){
                const stack = [[i, j]];

                const dir = [
                    [1, 0],   // 동
                    [-1, 0],  // 서
                    [0, 1],   // 남
                    [0, -1]   // 북
                ];

                while (stack.length > 0) {
                    const [x, y] = stack.pop();

                    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
                        continue;
                    }

                    // 지나간건 0으로 표기
                    grid[x][y] = '0';

                    // stack에 넣기
                    for (const [di, dj] of dir) {
                        stack.push([x + di, y + dj]);
                    }
                }
             
                count++
            }
        }
    }

    return count
};