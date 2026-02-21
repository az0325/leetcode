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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    let queue = [root]

    const result = []

    while(queue.length > 0) {
        const currDepth = queue.length
        const currentLevelData = [];

        for(let i = 0; i < currDepth; i++) {
            const curr = queue.shift();

            currentLevelData.push(curr.val)
            
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }

        result.push(currentLevelData);
    }

    return result
};