/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1 && !root2) return null

    // 한쪽이 없으면 존재하는 쪽을 그대로 반환
    if (!root1) return root2;
    if (!root2) return root1;

    // 둘 다 존재하면 값을 합침
    root1.val += root2.val;

    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    
    return root1
};