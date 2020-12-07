//Lanch "node day_5.js" in terminal to execute it ! 
//Made by Neal Poidras 05/12/2020
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function reverseAString(word)
{
    return word.split("").reverse().join("");
    
}

rl.question("Choose the word to  reverse : ",answer=>{
    console.log(reverseAString(answer));
    rl.close();
});