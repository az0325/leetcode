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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null

    // BFS
    const queue = [root]
    
    while(queue.length > 0) {
        const curr = queue.shift()

        const leftTemp = curr.left
        const rightTemp = curr.right

        curr.left = rightTemp
        curr.right = leftTemp

        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }

    return root
};