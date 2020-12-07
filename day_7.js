//Lanch "node day_7.js" in terminal to execute it ! 
//Made by Neal Poidras 07/12/2020
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function countVowelConsonant(str) {
    // write code here
    let count = 0
    str.split("").forEach(element=>{
        if(['a','e','i','o','u','y'].includes(element)){count+=1}
        else{count+=2} 
    })
    return count
}

rl.question("Choose your string : ",s =>{
    console.log(countVowelConsonant(s));
    rl.close();
});