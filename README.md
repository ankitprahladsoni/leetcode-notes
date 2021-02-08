# leetcode-notes

## 84. Largest Rectangle in Histogram
Easier approach: Nearest smaller element to left aur Nearest smaller element to right ka array banao, usse niklegi width, woh width se area nikalo [Link](https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28902/5ms-O(n)-Java-solution-explained-(beats-96))
Fancy approach: Har ek element o stack me dalte raho jab tak ki sab kuch increasing order me chal raha hai, jaise hi chota element mila, toh stack se pop kar kar ke abhi ke pointer se ek piche tak ka area nikalte raho [Link](https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28900/Short-and-Clean-O(n)-stack-based-JAVA-solution)
```java
public int largestRectangleArea(int[] heights) {
    int len = heights.length;
    Stack<Integer> s = new Stack<>();
    int maxArea = 0;
    for (int i = 0; i <= len; i++){
        int h = (i == len ? 0 : heights[i]);
        if (s.isEmpty() || h >= heights[s.peek()]) {
            s.push(i);
        } else {
            int tp = s.pop();
            maxArea = Math.max(maxArea, heights[tp] * (s.isEmpty() ? i : i - 1 - s.peek()));
            i--;
        }
    }
    return maxArea;
}
```
