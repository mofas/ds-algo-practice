class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root == None:
            return True

        def helper(node):
            if node == None:
                return True
            return node.val == root.val and helper(node.left) and helper(
                node.right)

        return helper(root)


solver = Solution()

root1 = TreeNode(1)
node1 = TreeNode(1)
node2 = TreeNode(1)
node3 = TreeNode(1)
node4 = TreeNode(1)
node5 = TreeNode(1)
root1.left = node1
root1.right = node2
node1.left = node3
node1.right = node4
node2.right = node5
print(solver.isUnivalTree(root1))