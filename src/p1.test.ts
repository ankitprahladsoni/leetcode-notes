it('should test my code', () => {
  const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

  expect(trap(heights)).toBe(6);
});

function trap(heights: number[]): number {
  let i = 0;
  let leftMost = 0;
  const len = heights.length;
  while (i < len && !leftMost) {
    leftMost = heights[i];
    i++;
  }

  let result = 0;

  while (i < len) {
    let stack = [];
    while (i < len && leftMost >= heights[i]) {
      stack.push(heights[i]);
      i++;
    }

    if (i === len) {
      return result;
    } else {
      result = stack.reduce((p, c) => p + leftMost - c, result);
      leftMost = heights[i];
      i++;
    }
  }
  return result;
}

function peek(stack: number[]) {
  return stack[stack.length - 1];
}
