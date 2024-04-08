// Leetcode easy

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(s, t) {
    if (s && !t) return false;
    if (!s && t) return true;

    let sPointer = 0;
    let tPointer = 0;
    while (sPointer < s.length && tPointer < t.length) {
        if (t[tPointer] == s[sPointer]) {
            sPointer++;
        }
        tPointer++;
    }

    return sPointer === s.length;
}

// This solution uses two pointers to solve it, a pointer for each string, and then we compare each string.
// If the pointer of the smaller string does not reach the end, that means that it is not a subsequence of
// the bigger string.

// Time complexity is O(n), n being the length of the bigger string since we need to check each character
// Space complexity is O(1) since we only use a couple of variables and these do not change with the input.