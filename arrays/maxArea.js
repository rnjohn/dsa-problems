// Leetcode medium

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of 
// the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        if (area > maxArea) maxArea = area;

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); // 49

/*
This solution uses two pointers, one starts at the beginning and the other starts at the end of the array. The area is calculated as the difference between
pointers (right - left) times the lower of the heights of the pointers (Math.min(height[left], height[right])) and we compare each area with the maxArea
variable. If that area is greater then we save it, and then depending on which pointer has the lower height, we move the left pointer or the right pointer,
and this will go on until the pointers cross each other.

The time complexity is O(n) since the array is only traversed once, and the space complexity is O(1) since there are only a couple of extra variables used
and these do not change depending on the input. No extra data structures were used
*/