//Lanch "node day_4.js" in terminal to execute it ! 
//Made by Neal Poidras 04/12/2020
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function findTheCurrentCentury(year)
{
    return Math.floor(year/100)
}

rl.question("Choose the year : ",answer =>{
    console.log(findTheCurrentCentury(answer));
    rl.close();
});

