// Leetcode medium

// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. 
// The returned string should only have a single space separating the words. Do not include any extra spaces.

function reverseWords(s) {
    let len = s.length;
    let res = ''
    let current = ''

    for (let i = 0; i < len; i++) {
        if (s[i] == ' ' && current == '') continue;
        if (s[i] == ' ' && current != '') {
            res = res == '' ? current : current + ' ' + res
            current = '';
        } else {
            current = current+s[i];
        }
    }

    if (current != '') {
        res = res == '' ? current : current + ' ' + res
    } 
    return res;
}

// This solution does not use any javascript array function for splitting or joining. A single pass through the string is done so it has O(n) time complexity.
// The space complexity is O(n) since a new string is used for reversing the original one.