// Reverse Vowels of a String

var reverseVowels = function(s) {
    const chars = s.split('');
    let left = 0, right = chars.length - 1;
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    while (left < right) {
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        while (left < right && !vowels.has(chars[right])) {  // FIXED
            right--;
        }
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }
    return chars.join('');
};

console.log(reverseVowels("ICECREAM"));