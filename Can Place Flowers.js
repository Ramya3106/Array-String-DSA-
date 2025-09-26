// Can Place Flowers

var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for(i=0;i<flowerbed.length;i++){
        if(flowerbed[i]==0){
            let emptyPrev=(i==0) ||(flowerbed[i-1]==0);
            let emptyNext=(i==flowerbed.length-1) || (flowerbed[i+1]==0);
            if(emptyPrev && emptyNext){
                flowerbed[i]=1;
                count+=1;
            }
        }
        if(count>=n){
            return true;
        }
    }    
     return count >=n;
};