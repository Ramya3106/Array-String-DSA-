// Product of Array Except Self

var productExceptSelf = function(nums) {
 const length=nums.length;
 const result=Array(
    length).fill(1);
    let prefix=1;
    for(let i=0;i<length;i++){
        result[i]=prefix;
        prefix*=nums[i];
    }
    let suffix=1;
    for(let i=length-1;i>=0;i--){
        result[i]*=suffix;
        suffix*= nums[i];
    }
 
 return result; 
};