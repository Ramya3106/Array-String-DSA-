// Reverse Words in a String

var reverseWords = function(s) {
    const words = s.trim().split(/\s+/);
    words.reverse();
    return words.join(' ');
};
console.log(reverseWords("the sky is blue"));