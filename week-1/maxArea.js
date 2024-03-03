var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i);
        max = Math.max(max, area);
        if (height[i] > height[j]) {
            j--;
        } else { i++ }
    }
    return max;
};

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:
// Input: height = [1,1]
// Output: 1