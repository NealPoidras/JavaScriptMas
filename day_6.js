
function sortByLenght(array){
    return array.sort(function(a,b){
        return a.length-b.length;
    });
}

console.log(sortByLenght(["abc", "", "aaa", "a", "zz"]));
