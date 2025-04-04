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
 * @return {boolean}
 */


// function heightOfBinaryTree(root){
//     if(!root) return 0;

//     let left = 1 + heightOfBinaryTree(root.left);
//     let right = 1 + heightOfBinaryTree(root.right);

//     return Math.max(left,right);
// }

// var isBalanced = function(root) {
//     if(!root) return true;

//     let leftHeight = heightOfBinaryTree(root.left);
//     let rightHeight = heightOfBinaryTree(root.right);

//     if(Math.abs(leftHeight-rightHeight)>1) return false;

//     let left = isBalanced(root.left);
//     let right = isBalanced(root.right);

//     if(!left || !right) {
//         return false;
//     }else{
//         return true; 
//     }
// };

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isHeightBalanced = true;

    function findHeight(root){
        if(!root) return 0;

        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);

        if(Math.abs(rightHeight - leftHeight) > 1) isHeightBalanced = false;

        return 1 + Math.max(leftHeight, rightHeight);
    }

    findHeight(root);

    return isHeightBalanced;
    
};
