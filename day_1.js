//Lanch "node day_1.js" in terminal to execute it ! 
//Made by Neal Poidras 01/12/2020
function findNumberOfCandies(candies,numberOfChildren)
{
    return Math.floor(candies/numberOfChildren)*numberOfChildren;
}

console.log(findNumberOfCandies(10,3))