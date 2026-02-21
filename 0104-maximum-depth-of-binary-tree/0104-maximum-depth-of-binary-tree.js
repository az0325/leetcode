/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // BFS

    if(!root) return 0

    let depth = 0;
    let queue = [root]; // 탐색을 위한 바구니(Queue) 시작

    while(queue.length > 0) {
        // 현재 층에 노드가 몇 개 있는지 확인
        const levelSize = queue.length; 

        // 층 하나 내려왔으니 깊이 추가
        depth++;

        // 4. 현재 층에 있는 노드들만 쏙쏙 다 꺼내기
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            // 5. 꺼낸 노드의 자식들이 있다면 다음 층(큐)에 대기시키기
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    return depth

};