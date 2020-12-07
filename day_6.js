//Lanch "node day_6.js" in terminal to execute it ! 
//Made by Neal Poidras 06/12/2020
function sortByLenght(array){
    return array.sort(function(a,b){
        return a.length-b.length;
    });
}

console.log(sortByLenght(["abc", "", "aaa", "a", "zz"]));
