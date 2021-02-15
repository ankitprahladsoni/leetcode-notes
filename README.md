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

## 322. Coin Change

aisa lagega ki sort karke greedy lagalo, par DP fast padega  
[link](https://leetcode.com/problems/coin-change/discuss/77385/DP-AC-JAVA-Solution-18ms-Beating-95)

## 416. Partition Equal Subset Sum

Napsak ka problem, old sum hai toh definitely nahi hoga, even hua toh ya toh koi number lo ya toh mat lo

```java
dp[n + 1][sum + 1]
top row false // 0 element se sum nahi banega
first column true // koi bhi element se sum 0
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= sum; j++) {
      const currNum = nums[i - 1];
      const currSum = j;
      if (currNum > currSum) {
        dp[i][j] = dp[i - 1][j]; // definitely nahi lena is element ko
      } else {
        dp[i][j] = dp[i - 1][j] // ya toh nahi liya
        || dp[i -1][currSum - currNum]; // aur agar liya, toh sum - current bhi subset ka part hai kya?
      }
    }
}
```

### isme subset sum to specific number bhi ho jayega

aur koi puche ki minimum diff partition karo, toh subset sum hi nikalo till range (all sum), matrix ke last row me wahi line true hogi jiske column (currentSum) ka subset ban sakta hai. Toh woh columns lo, uske mid value check karo aur return karo.

| element      | column 1 | column 2 | column 3 | ... | max sum |
| ------------ | -------- | -------- | -------- | --- | ------- |
| last element | T        | F        | T        | ... | T       |

### subset with diff equal to k

usme bhi subset sum hi nikalna hai, s1 - s2 = diff, s1 + s2 = maxSum, toh s1 = (maxsum + diff)/2  
jo answer aaya, uski ka subset count nikalna hai

## 1167. Minimum cost to connect sticks

sabse choti sticks lo, chipakao, heap me daale, firse 2 min stick lo, ez, pz

```java
public int connectSticks(int[] sticks) {
    if(sticks == null || sticks.length < 2){
        return 0;
    }

    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    for(int num : sticks){
        minHeap.add(num);
    }

    int res = 0;
    while(minHeap.size() > 1){
        int merge = minHeap.poll() + minHeap.poll();
        res += merge;
        minHeap.add(merge);
    }

    return res;
}
```
