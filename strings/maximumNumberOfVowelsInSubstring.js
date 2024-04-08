// Leetcode medium - solution using sliding window

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

function maxVowels(s, k) {
    let maxNum = 0;

    for (let i = 0; i < k; i++) {
        maxNum += checkIfVowel(s[i]) ? 1 : 0;
    }

    let currNum = maxNum;
    for (let i = k; i < s.length; i++) {
        let first = s[i-k];
        if (checkIfVowel(first)) currNum--;
        if (checkIfVowel(s[i])) currNum++;
        if (currNum > maxNum) maxNum = currNum;
    }

    return maxNum;
}

function checkIfVowel(string) {
    switch (string) {
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default:
            return false;
    }
}

s = "abciiidef"
k = 3
console.log(maxVowels(s, k)) // 3

/*
    This solution uses a sliding window approach, first we take the first k chars of the string and evaluate if there are vowels in it and store the sum.
    Then we check the rest of the string, and substract from the sum if the char that left the window was a vowel, and add to the sum if the char that
    entered the window was a vowel.
    This solution has a time complexity of O(n) since we only go through the array once, and the vowel array is constant.
    This solution has a space complexity of O(1) since the only extra data structure we use is the vowel array, but it always has a constant number of
    items so it is considered constant.
*/