// Computer generate random word from created array.
// Userguess letter by pressing letter key 
// computer compares userguess to letters in computer generated word
// displays letter either in correct space or incorrect box
// displays # of guesses user has left


var compList = ["Rick and Morty" , "Spongebob Squarepants" , "Adventure Time" , "Gravity Falls" , "ThunderCats" , "Phineas and Ferb" , "Regular Show" , "Avatar" , "Legend of Korra" , "Samurai Jack" , "Cowboy Bebop" , "Dexters Laboratory" , "Simpsons" , "Teen Titans" , "He Man" , "Larva"]
var compChoose = "";            //random picked word stored here
var lettersINchoice = [];       //use to break letters from word into new array of letters
var wordLength = 0 ;             //amount of blank tiles word will take
var correctNremaining = [];           //Variable to hold the right answers and the remaining blank tiles
var userGuess = "" ;            //place to hold ALL letters guessed and convert them to recognizable case
var userWrong = [] ;            //holds all the wrong letters guessed
                                 // var myString = getElementById("blankTiles").value;
//var BlanksToSpaces = 0 ;
//game trackers
var guessCounter = 15 ;         // keep track of user guess #
var wins = 0 ;                  // keep track of wins
var losses = 0 ;                // track losses




//Start creating functions.  Remember functions are declared but not run until called upon later.


function begin (){

    guessCounter = 15;  //reset guesses

    compChoose = compList [Math.floor(Math.random () * compList.length)].toUpperCase();  //select random word
    //console.log(compChoose);
    lettersINchoice = compChoose.split("");  //should break word into individual letter array
    //console.log(lettersINchoice);
    wordLength = lettersINchoice.length;  //should count the letters from last array
    //console.log(wordLength);

    correctNremaining = [];  //look at wordLength and alter it based on guesses
    //console.log(correctNremaining);

    userWrong = []; //
    //console.log(userWrong);


    for (var i = 0; i < wordLength; i++) {
        console.log("Letter: " + lettersINchoice[i]);
      if (lettersINchoice [i] === " ") {        
        console.log("SPACE")
        correctNremaining.push(" "); } // if statement to create blank spaces 

       else {
           (lettersINchoice [i] ==! " ")
           console.log("NOT SPACE");
        correctNremaining.push("_"); //please create the correct number of blank spaces from the lettersINchoice array *\./*
        
        }  
       
    }
console.log(compChoose);
console.log(correctNremaining);

//console.log("JOINING: " + correctNremaining.join(" "));
document.getElementById("blankTiles").innerHTML = correctNremaining.join(" ");

document.getElementById("wrongGuess").innerHTML = userWrong.join(" ");
//console.log("JOINING2:" + userWrong.join(" "))

document.getElementsByClassName("guessTimates").innerHTML = guessCounter;

//console.log("guessTimates:" + guessCounter);
}

//begin comparing user to comp,  Still just declaration point for fxn

function inspector (letter) { 
    var whereInWord = false;  

    for (var i = 0; i < wordLength; i++) {

        if (compChoose[i] === letter) {  
//console.log("inspector:" + compChoose[i]);

            whereInWord = true;
        }
        
    }



 if (whereInWord) {  //this figures out the WHERE of the letters especially with the variable correctNremaining
    for (var x = 0; x < wordLength; x++) {

        if (compChoose[x] === letter) {
//console.log("whereInWord:" + compChoose[x]);

            correctNremaining[x] = letter;
        }
    }

}

else {

    userWrong.push(letter);  //to add letter to held list of wrong letters

    guessCounter--;
    }
        }

function roundOver() {

    console.log("winner:  " + wins + " | loser: " + losses + " | guessTimates: " + guessCounter); 


    // Effects HTML

    document.getElementById("guessTimates").innerHTML = guessCounter; //changes to HTML to display as guesses change
  
    console.log(guessCounter);
  
    document.getElementById("blankTiles").innerHTML = correctNremaining; //appends the array 

    document.getElementById("wrongGuess").innerHTML = userWrong; //so the user can see what letters they've tried

if (lettersINchoice.toString() === correctNremaining.toString()) {
    //console.log("toString:" + lettersINchoice);
    wins ++ ; //add to number of wins
        
    alert("YOU WIN!");  //want to possiibly change this to a "Confirm Box" with 'do you want to play again?

    document.getElementById("winner").innerHTML = wins;

    begin();

}
    else if(guessCounter === 0) {

    losses ++;  //add to the count of losses
        
        alert("Good Try");  //also may want to change this to some sort of confirm box asking "Try Again?"

        document.getElementById("loser").innerHTML = losses;

    
    begin();

    }
}


//  FINALLY, LETS RUN THESE FUNCTIONS!!

begin();

document.onkeypress = function(event) {
  
    userGuess = String.fromCharCode(event.which).toUpperCase();

    inspector(userGuess);
//console.log(inspector(userGuess))
    roundOver();
};