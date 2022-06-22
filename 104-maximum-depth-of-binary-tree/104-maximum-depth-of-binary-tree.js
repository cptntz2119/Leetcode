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
//     if (!root) return 0;
//     if(!root.left && !root.right) return 1;
    
//     return Math.max(1+maxDepth(root.left), 1+maxDepth(root.right));
    if(!root) return 0;
    let depth =0;
    let queue = [root];
    while(queue.length >0){
        const children = [];
        for (let node of queue){
            if (!node) continue;
            children.push(node.left);
            children.push(node.right);
        }
        if (children.length >0){
            depth ++;
        }
        queue = children;
    }
    return depth;
};