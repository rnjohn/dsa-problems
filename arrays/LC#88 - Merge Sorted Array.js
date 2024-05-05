// From Leetcode
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that 
// should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge(nums1, m, nums2, n) {
    i = m - 1;
    j = n - 1;
    k = m + n - 1;

    while (j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    return nums1;
}

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
nums1 = merge(nums1, m, nums2, n);
console.log(nums1);

// For this we can use three pointers, to keep the solution at O(m+n).
// One of the pointers is at m-1, where the end of the actual values of nums1 is located
// The other pointer is at n-1, where the end of the values of nums2 is located
// The other pointer at m+n-1, where the end of the nums1 array is located, and where the greater value
//  of the comparison will be put

// Since there is only a pass of the nums1 array, the solution is O(m+n)