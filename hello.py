from typing import List
import heapq


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    result = 0

    def dfs(self, root, maxVal):

        if not root:
            return

        if root.val >= maxVal:
            self.result += 1
        maxVal = max(root.val, maxVal)
        dfs(root.left, maxVal)
        dfs(root.right, maxVal)

    def goodNodes(self, root: TreeNode) -> int:

        dfs(root, root.val)
        return self.result


obj = Solution()

c = 1
a = []
b = [1]

if c:
    print("a")
else:
    print(" no a ")
