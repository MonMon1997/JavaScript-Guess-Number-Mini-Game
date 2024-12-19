let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;

function checkGuess(){
    const useGuess = Number(guessField.value)
   
    if(guessCount===1){
        guesses.innerHTML = "Previous Guess"
    }

    guesses.textContent = `${guesses.innerHTML} ${useGuess}`
    guessCount++

    guessCount === 10 ? 
    (guessField.disabled = true, guessSubmit.disabled = true, newElement()) : 
    (guessField.disabled = false, guessSubmit.disabled = false)

    useGuess === randomNumber ?
    (guessField.disabled = true, guessSubmit.disabled = true, newElement(),correct()) : 
    (guessField.disabled = false, guessSubmit.disabled = false, wrong() )

  
    useGuess > randomNumber? high() : low()

    guessField.focus()
    guessField.value = ""

}

guessSubmit.addEventListener("click", checkGuess)

function newElement(){
    const para = document.createElement("button")
    para.textContent = "Start New Game"
    para.id = "resetGame"
    document.body.appendChild(para)

    const x = document.getElementById("resetGame")
    x.addEventListener("click", resetgame)
    console.log(x.id)

}

function correct(){
    lastResult.textContent = "Congrat! You Correct!";
    lastResult.style.backgroundColor = "green";
    lastResult.style.color = "white";
}

function wrong(){
    lastResult.textContent = "Wrong Dude!";
    lastResult.style.backgroundColor = "red";
    lastResult.style.color = "white";
}

function high(){
    lowOrHi.innerHTML = "Last guess was too high!"
}

function low(){
    lowOrHi.innerHTML = "Last guess was too low!"
}

function resetgame(){
    guessField.disabled = false
    guessSubmit.disabled = false
    
    guessField.value = ""
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }

    const resetButton = document.getElementById("resetGame")
    resetButton.parentNode.removeChild(resetButton);
    randomNumber = Math.floor(Math.random() * 100) + 1;
}