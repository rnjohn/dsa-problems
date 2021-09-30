/*
Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become
a2b1c5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string. You can assume the string
has only uppercase and lowercase letters (a - z).
*/

function stringCompression(str) {
  let count = 1;
  let prev;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (prev) {
      if (str[i] == prev) {
        count++;
      } else {
        newStr = newStr + prev + count;
        count = 1;
      }
    }
    prev = str[i];
  }
  newStr = newStr + prev + count;
  return newStr;
}

//Time comp: O(n) - n being the length of the string
//Space comp: O(n) - n being the length of the string

/*
- I can compress a string by retaining the last letter used
  and compare with the current letter, if it's the same then
  a counter will increase and if it's not then the counter 
  will be appended to the new string and return to 1
*/