//Lanch "node day_7.js" in terminal to execute it ! 
//Made by Neal Poidras 07/12/2020
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function countVowelConsonant(s){
    vowel = ['a','e','i','o','u','y']; 
    let count = 0;
    s.split("").forEach(element => {
        if(vowel.includes(element)){count++;}
        else{count+=2;}
    });
    return count;
}

rl.question("Choose your string : ",s =>{
    console.log(countVowelConsonant(s));
    rl.close();
});