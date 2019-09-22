
let goal;
let guessCount;


function setGame(){
    goal = Math.floor(Math.random()*100)
    guessCount = 1;
    
    console.log(goal)
}

function checkGuess(guess){
    document.getElementById("closeZone").innerHTML = closeness(guess)
    document.getElementById("tryZone").innerHTML = countUp()
}

function closeness(guess){
    guess = Math.abs(guess - goal)
    if(guess>50){
        return "Frozen"
    } else if(guess>19 && guess<=50){
        return 'Cold'
    } else if(guess>9 && guess<=20){
        return 'Warm'
    } else if(guess>4 && guess<=10){
        return 'Hot'
    } else if(guess>0){
        return "Boiling"
    } else {
        return "Congrats"
    }
}

function countUp(){
    return guessCount++
}