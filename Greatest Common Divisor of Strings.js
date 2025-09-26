// Greatest Common Divisor of Strings

let str1 = "ABCABC";
let str2 = "ABC";
var gcdOfStrings = function(str1, str2) {
    if(str1+str2!=str2+str1){
        return "";
    }
    function gcd(a,b){
        while(b!==0){
            let temp=b;
            b=a%b;
            a=temp;
        }
        return a;
    }
    const gcdlength=gcd(str1.length,str2.length);
    return str1.substring(0,gcdlength);
};
