// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so 
// that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.


function minRemoveToMakeValid(s) {
    let stack = [];
    let len = s.length;
    let res = '';

    for (let i = 0; i < len; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else if (s[i] == ')') {
            if (stack.length && s[stack[stack.length -1]] == '(') {
                stack.pop()
            } else {
                stack.push(i)
            }
        }
    }

    for (let i = 0; i < len; i++) {
        if (stack.length && i == stack[0]) {
            stack.shift()
            continue
        }
        res += s[i];
    }

    return res;
}

s = "lee(t(c)o)de)"
console.log(minRemoveToMakeValid(s));

// The time complexity of this solution is O(2n), since we traverse the string twice, but we remove the
// constant so the time complexity is O(n)
// The space complexity is O(n) since we create another string where the result ends up being
