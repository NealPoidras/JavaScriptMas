function launchDice(){
    dice = ['one','two','three','four','five','six']
    return dice[Math.floor(Math.random()*(6))]
}

console.log(launchDice())