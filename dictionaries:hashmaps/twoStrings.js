/*
Given two strings, determine if they share a common substring. 
A substring may be as small as one character.
*/

function twoStrings(s1, s2) {
  let set = new Set();
  s1.split('').forEach(value => {
    set.add(value);
  });
  let strArr = s2.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (set.has(strArr[i])) return 'YES';
  }
  return 'NO'
}

/*
Time comp:
- split comp: O(n) -- n being the s1 string length;
- forEach comp: O(n) -- n being the s1 array length;
- for comp: O(m) -- m being the s2 string length;
overall this gives a complexity of O(n+m)

Space comp: O(n+m) -- n being the s1 string set length and m being the s2 string array length
*/