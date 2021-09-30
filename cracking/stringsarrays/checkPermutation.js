/*
Given two strings, write a method to decide if one is a permutation of the other.
*/

function checkPermutation(str1, str2) {
  const str1Map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (str1Map.has(str1[i])) {
      str1Map.set(str1[i], str1Map.get(str1[i]) + 1);
    } else {
      str1Map.set(str1[i], 1);
    }
  }
  const str2Map = new Map();
  for (let i = 0; i < str2.length; i++) {
    if (str2Map.has(str2[i])) {
      str2Map.set(str2[i], str2Map.get(str2[i]) + 1);
    } else {
      str2Map.set(str2[i], 1);
    }
  }

  for (const key of str1Map.keys()) {
    if (str2Map.has(key)) {
      if (str2Map.get(key) != str1Map.get(key)) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

// Time comp: O(n + m) - n and m being the strings
// Space comp: O(n + m) - n and m being the strings

/*
- populate a hashmap with the first string, using the letters as keys
  and the values as the amount of times they appear in the string
- do the same with the second string
- check if the hashmaps have the same keys and values
*/