
// Computer generate random word from created array.
// Userguess letter by pressing letter key 
// computer compares userguess to letters in computer generated word
// displays letter either in correct space or incorrect box
// displays # of guesses user has left
// 


var userGuess ;             //current guess
var userGuesses = [ ];      //stored user guesses
var compPick ;            //random picked word
var wordSpace = "_";       //amount of spaces word will take
var lockedWord;            //locked from array
var guessCounter ;          // keep track of user guess #

var showLives = document.getElementById('scoreboard');
var gameStart = document.getElementById('PlayButton');

    // create puzzle 
var compArray = [
        "Rick and Morty" , "Spongebob SquarePants" , "Adventure Time" , "Gravity Falls" , "ThunderCats" , "Phineas and Ferb" , "Regular Show" , "Avatar" , "Legend of Korra" , "Samurai Jack" , "Cowboy Bebop" , "Dexters Laboratory" , "Beavis and Butthead" , "Ren and Stimpy" , "Simpsons" , "South Park" , "Castlevania" , "Dragonball Z"
];
    
  console.log(compPick = compArray [Math.floor(Math.random () * compArray.length)]);
 
     

     userGuesses = [ ];
     wordSpace = 0;
     guessCounter = 0;


//how to loop through string getcompArray to display amount of underscores and append undersccores to game area.
 magicWord = function (){
    
    wordSpace = document.getElementById('gameArea');
    rightPick = document.createElement('ul');

    for (var x = 0; x < compArray.length; x++){ 
        rightPick.setAttribute('id','imGood')
        userGuesss = document.createElement('li');
        userGuess.setAttribute('class', 'guess');
        if (compPick[x] === "-") {
          userGuess.innerHTML = "-";
          wordSpace = 1;
        } else {
          userGuess.innerHTML = "_";
        }
  
        userGuess.push(userGuess);
        wordSpace.appendChild(rightPick);
        rightPick.appendChild(userGuess);
      }
    }

    
    
      

    result = function () {
        wordSpace = document.getElementById('gameArea');
        rightPick = document.createElement('ul');
    
        for (var i = 0; i < compArray.length; i++) {
          rightPick.setAttribute('id', 'my-word');
          userGuess = document.createElement('li');
          userGuess.setAttribute('class', 'guess');
          if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
          } else {
            guess.innerHTML = "_";
          }
    
          geusses.push(guess);
          wordHolder.appendChild(rightPick);
          rightPick.appendChild(userGuess);
        }

    // the boxes (eventually blank lines) for the correct word
    }

    