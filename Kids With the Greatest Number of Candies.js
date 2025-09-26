// Kids With the Greatest Number of Candies

var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    const result = [];
    for(let candyCount of candies){
        if(candyCount + extraCandies>= maxCandies){
            result.push(true);
        }else{
            result.push(false);
        }
    }  
    return result; 
};