
/* Change player name as per player input */
document.getElementById("myButtonOne").onclick = function() {
    let playerOneName = document.getElementById("playerOneInput").value;
    document.getElementById("p1Name").innerHTML = playerOneName;
}

document.getElementById("myButtonTwo").onclick = function() {
    let playerTwoName = document.getElementById("playerTwoInput").value;
    document.getElementById("p2Name").innerHTML = playerTwoName;
}
    

function diceGame() {
/* Randomises player 1 dice*/
    let randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

    let randomDiceImage = "images/dice" + randomNumber1 + ".png"; 
    
    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomDiceImage);

    
/* Randomises player 2 dice*/
    let randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 

    let image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomDiceImage2);

    /* Winner Selector */

    if (randomNumber1 > randomNumber2) {
        let winnerName = document.getElementById("playerOneInput").value;
        document.querySelector("h1").innerHTML = winnerName + " Wins!";
        player1Score = player1Score + 1;

    }else if (randomNumber2 > randomNumber1) {
        let winnerName = document.getElementById("playerTwoInput").value;
        document.querySelector("h1").innerHTML = winnerName + " Wins!";
        player2Score = player2Score + 1;
        
    }else {
    document.querySelector("h1").innerHTML = "It's a Tie!";
    player1Score = player1Score + 1;
    player2Score = player2Score + 1;
}
}


