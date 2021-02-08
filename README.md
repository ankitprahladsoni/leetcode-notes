# leetcode-notes

## 42. Trapping Rain Water

Left pointer aur right pointer lo, paani toh un logo ke bich me hi bharega, toh minimum kaunsa hai woh pata karo, aur unke beech me element dekho ek ek karke, aur left/right se kitna difference hai hight me utha hi toh paani woh building ke upar aayega. [link](https://leetcode.com/problems/trapping-rain-water/discuss/17391/Share-my-short-solution.)

```java
public int trap(int[] A){
    int a=0;
    int b=A.length-1;
    int max=0;
    int leftmax=0;
    int rightmax=0;
    while(a<=b){
        leftmax=Math.max(leftmax,A[a]);
        rightmax=Math.max(rightmax,A[b]);
        if(leftmax<rightmax){
            max+=(leftmax-A[a]);       // leftmax is smaller than rightmax, so the (leftmax-A[a]) water can be stored
            a++;
        }
        else{
            max+=(rightmax-A[b]);
            b--;
        }
    }
    return max;
}
```

## 84. Largest Rectangle in Histogram

_Easier approach:_ Nearest smaller element to left aur Nearest smaller element to right ka array banao, usse niklegi width, woh width se area nikalo [Link](<https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28902/5ms-O(n)-Java-solution-explained-(beats-96)>)  
_Fancy approach:_ Har ek element o stack me dalte raho jab tak ki sab kuch increasing order me chal raha hai, jaise hi chota element mila, toh stack se pop kar kar ke abhi ke pointer se ek piche tak ka area nikalte raho [Link](<https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28900/Short-and-Clean-O(n)-stack-based-JAVA-solution>)

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

## 85. Maximal Rectangle

Upar histogram wali problem ka hi variation hai, har ek row ko histogram me convert kardo histogram me, aur upar wala code se area nikal lo max. Flat karna hai bas har row ko.
