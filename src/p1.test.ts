it('should test my code', () => {
  expect(canPartition([1, 5, 11, 5])).toBe(true);
  expect(canPartition([1, 2, 3, 5])).toBe(false);
  expect(canPartition([1, 2, 5])).toBe(false);
});

function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((n, a) => n + a, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const mid = sum / 2;

  return subsetSum(nums, mid);
}

const subsetSum = (nums: number[], sum: number): boolean => {
  const n = nums.length;

  let dp: boolean[][] = [];

  for (var a = 0; a <= n; a++) {
    dp[a] = [];
    dp[a][0] = true;
  }
  for (var a = 1; a <= sum; a++) {
    dp[0][a] = false;
  }

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= sum; j++) {
      const currNum = nums[i - 1];
      const currSum = j;
      if (currNum > currSum) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][currSum - currNum];
      }
    }
  }

  return dp[n][sum];
};
