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
    // let queue = [];
    // let result = [];
    // if (root===null) return result;
    // queue.push(root);
    // while(queue.length > 0){
    //     let level = [];
    //     let len = queue.length;
    //     for (let i=0; i < len; i++){
    //         let node = queue.shift();
    //         level.push(node.val);
    //         if (node.left) queue.push(node.left);
    //         if (node.right) queue.push(node.right);
    //     }
    //     result.push(level);
    // }
    // return result;
    //--------recursive
     const order = [];
    const BFS = (node, depth) => {
        if (!node) return;
        if (depth === order.length) {
            order.push([]);
        }
        order[depth].push(node.val);
        BFS(node.left, depth + 1);
        BFS(node.right, depth + 1);
    }
    BFS(root, 0);
    return order;
};