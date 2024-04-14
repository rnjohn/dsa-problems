// Leetcode easy

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if 
// n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

function canPlaceFlowers(flowerbed, n) {
    idx = 0;
    plants = 0;
    len = flowerbed.length;
    while (plants < n && idx < len) {
        if (flowerbed[idx] == 0 && 
        (idx-1 < 0 || flowerbed[idx-1] == 0) &&
        (idx+1 == len || flowerbed[idx+1] == 0)) {
            flowerbed[idx] = 1;
            plants++
        }
        idx++;
    }
    
    return plants == n;
}

flowerbed = [1,0,0,0,1]
n = 1
console.log(canPlaceFlowers(flowerbed, n));

// This algorithm has O(n) time complexity since it goes through the array once and it has O(1) space complexity since only some extra variables are used
// and this amount does not change depending on the input