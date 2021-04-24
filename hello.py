import collections
from typing import List
import heapq


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def minDeletions(self, s: str) -> int:
        freq = collections.Counter(list(s))
        seen = set()
        result = 0
        for val, count in freq.items():
            while count in seen:
                count -= 1
                result += 1
            seen.add(count)

        return result


sol = Solution()
print(sol.minDeletions("bbcebab"))


print("another cell")
