// Merge Strings Alternately

let word1= "abc";
let word2= "pqr";

var mergeAlternately = function(word1, word2) {
    let mergedstring = "";
    let i=0,j=0;
    while(i<word1.length || j<word2.length){
        if(i<word1.length){
            mergedstring += word1[i];
            i+=1;
        }
        if(j<word2.length){
            mergedstring += word2[j];
            j+=1;
        }
    }
     return mergedstring;
    
};
console.log(mergeAlternately(word1, word2));

