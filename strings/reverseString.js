// Turing test

/*
    Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and
    all letter reverse their positions

    Example 1:
    Input: "ab-cd"
    Output: "dc-ba"

    Example 2:
    Input: "a-bC-dEf=ghlj!!"
    Output: "j-lh-gfE=dCba!!"
*/

function reverse(s) {
    let len = s.length;
    let nonLetterMap = new Map();
    let charStack = [];

    for (let i = 0; i < len; i++) {
        let char = s[i]
        let charCode = char.charCodeAt();
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <=90)) { // it is a letter
            charStack.push(char)
        } else {
            nonLetterMap.set(i, char)
        }
    }

    let newString = '';
    for (let i = 0; i < len; i++) {
        if (nonLetterMap.has(i)) {
            newString += nonLetterMap.get(i);
            nonLetterMap.delete(i);
        } else {
            newString += charStack.pop();
        }
    }
    
    return newString;
}

s = "a-bC-dEf=ghlj!!"
console.log(reverse(s)); // "j-lh-gfE=dCba!!"