// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

function greatestCommonDivisor(str1, str2) {
    if (str1 + str2 != str2 + str1) return '';

    let len1 = str1.length;
    let len2 = str2.length;

    let gdc = euclidean(len1, len2);

    return str1.substring(0, gdc);
}

function euclidean(num1, num2) {
    if (!num2) {
        return num1
    }

    return euclidean (num2, num1 % num2)
}

str1 = "ABCABCABC"
str2 = "ABC"
console.log(greatestCommonDivisor(str1, str2));

// This algorithm makes use of the Euclidean algorithm, which is used to obtain the greatest common divisor between two numbers.
// First, we check if str1 + str2 is equal to str2 + str1, because if they are not equal that means that there is no common prefix between the two strings.
// If they are equal, the euclidean algorithm is used to recursively find the greatest common divisor between the two numbers.

// The space complexity is O(m), m being the amount of divisions done in the euclidean algorithm