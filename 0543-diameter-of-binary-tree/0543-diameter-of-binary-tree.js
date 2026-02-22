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
var diameterOfBinaryTree = function(root) {
    if(!root) return 0

    let maxDiameter = 0

    const dfs = (node) => {
        if(!node) return 0

        // 왼쪽, 오른쪽 자식의 깊이를 각각 구함 (재귀)
        const left = dfs(node.left);
        const right = dfs(node.right);

        // 현재 노드를 중심으로 하는 지름을 계산해서 최댓값 업데이트
        // (왼쪽 깊이 + 오른쪽 깊이)가 바로 현재 노드를 통과하는 지름!
        maxDiameter = Math.max(maxDiameter, left + right);

        // 부모 노드에게는 내 쪽의 "더 깊은 길" 하나만 알려줌 (+1은 자기자신)
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return maxDiameter;
};