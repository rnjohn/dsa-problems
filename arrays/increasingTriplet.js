

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
console.log(increasingTriplet(nums))