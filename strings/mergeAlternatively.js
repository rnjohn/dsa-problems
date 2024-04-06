// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

function mergeAlternatively(word1, word2) {
    let res = '';
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < word1.length || idx2 < word2.length) {
        if (idx1 < word1.length) {
            res += word1[idx1];
            idx1++;
        }

        if (idx2 < word2.length) {
            res += word2[idx2];
            idx2++;
        }
    }

    return res;
}

// This solution is O(n+m) in time complexity since it runs over both strings a single time. In space complexity this would also be O(n+m) since there is a
// new variable which will contain the both strings merged.