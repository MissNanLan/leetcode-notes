function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let arr = []
    let height = 0
 
    arr.push(root)

    while (arr.length > 0) {
        let size = arr.length
        while (size>0) {
            const node = arr.shift()
            if (node.left) {
                arr.push(node.left)
            }
            if (node.right) {
                arr.push(node.right)
            }
      
            size--
        }
        
        heigh++
    }
    return heigh
};


let tree = new TreeNode(
    new TreeNode(9),
    new TreeNode(20, new TreeNode(25), new TreeNode(7))
);

console.log(maxDepth(tree));