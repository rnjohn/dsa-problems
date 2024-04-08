// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and
//  nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

function increasingTriplet(nums) {
    let a = Infinity;b = Infinity, c = Infinity;
     for(let i=0;i<nums.length;i++){
      if(a>= nums[i]) a=nums[i];
      else if(b>= nums[i]) b =nums[i];
      else if(c>= nums[i]) return true;
    }
    return false
}


nums = [5,4,3,2,1]
console.log(increasingTriplet(nums)) // false

nums = [1,2,3,4,5]
console.log(increasingTriplet(nums)) // true

// This solution only has 3 extra variables, each one set initially to infinity and then comparing from that in a reverse way.

// This solution has a time complexity of O(n) and a space complexity of O(1)