//Lanch "node day_3.js" in terminal to execute it ! 
//Made by Neal Poidras 03/12/2020
function split_array(myArray,index)
{
    return [myArray.slice(0,index), myArray.slice(index)];
    
}
console.log(split_array(['a','b','c','d','e'],3))