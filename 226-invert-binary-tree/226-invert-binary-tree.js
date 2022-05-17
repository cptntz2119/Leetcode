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
    
//     if (root !== null){
//         invertTree(root.left);
//         invertTree(root.right);
        
//         //swap children
//         [root.left, root.right] = [root.right, root.left];
//     }
//     return root;
    const result = [];
    result.push(root);
    
    if(root ===null) return null;
    
    while(result.length){
        console.log('result',result);
        let node = result.shift();
        console.log("node",node);
        let temp;
        
        temp = node.left;
        node.left = node.right;
        node.right =temp;
        
        if(node.left) result.push(node.left);
        if(node.right) result.push(node.right);
        
        
    }
    return root;
        
};