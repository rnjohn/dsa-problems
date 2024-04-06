// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not 
// equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need 
// to do the following things:

// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
// - The remaining elements of nums are not important as well as the size of nums.
// - Return k.

function removeElement(nums, val) {
    let len = nums.length;
    let lastIdx = len-1;
    let set = new Set();
    
    if (nums[lastIdx] == val) {
        while (nums[lastIdx] == val) {
            nums[lastIdx] = '_';
            lastIdx--;
        }
    }
    
    for (let i = 0; i < len; i++) {
        if (nums[i] == val) {
            let temp = nums[lastIdx];
            nums[lastIdx] = '_';
            nums[i] = temp;
            lastIdx--;
        } else {
            if (!set.has(nums[i])) {
                set.add(nums[i]);
            }
        }
    }
    
    return set.size;
}

// This solution only does a single pass through the whole array, and since the search in a set is O(1),
// the solution is O(n)