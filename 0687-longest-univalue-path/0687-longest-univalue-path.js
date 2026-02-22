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
var longestUnivaluePath = function(root) {
    if(!root) return 0

    let result = 0

    const dfs = (node) => {
        if(!node) return 0

        let left = dfs(node.left)
        let right = dfs(node.right)

        // 현재 노드가 자식 노드랑 동일할 경우 + 1
        // 다르면 0
        if(node.left && node.left.val === node.val) {
            left += 1
        } else {
            left = 0
        }

        if(node.right && node.right.val === node.val) {
            right += 1
        } else {
            right = 0
        }

        result = Math.max(result, left + right)
        return Math.max(left, right)
    }

    dfs(root)
    return result
};