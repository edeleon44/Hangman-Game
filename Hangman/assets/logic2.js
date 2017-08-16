//GLOBAL VARIABLES --> REACH TO ALL OF THE FILE
// -----------------------------------------------------------------
//Arrays and variable for holding data
var wordOptions = ["poker", "chip", "felt", "fish"];
var selectedWord = " ";
var lettersInWord = [];
var letterGuessed = [];
var numBlanks = 0;	
var blanksAndSuccesses = []; // P O _ _ _ (example..)
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS --> REUSABLE BLOCKS OF THAT I WILL CALL UPON WHEN NEEDED
//--------------------------------------------------------------------

function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;


		//reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

		

	//Populate blanks and successes with right number of blanks
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}


		//_ _ _ _ h3 tag needs to have the ability to change according to word selected
	//The blankAndSuccesses.JOIN removes the comma's assosiated with the word chosen.
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

		//Test
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);

	}	
	
	function checkLetters(letter){	
		//First checks if the letter is anywhere in the word --> Then every spot it exists
		 
		 var isLetterInWord = false;

		 for (var i=0; i<numBlanks; i++) {
		 	if(selectedWord[i] == letter) {
		 	isLetterInWord = true;
		 }
	}

	//Check where letter exists
	if(isLetterInWord) {
	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
			}
		}
	}
		//Letter was not found
	else {
		wrongLetters.push(letter);
		guessesLeft--	
		}

		//test
		console.log(blanksAndSuccesses);
	}	
	


	function roundComplete(){
		console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);

		//Each Round we need an update 
		document.getElementById("numGuesses").innerHTML=guessesLeft;
		document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
		document.getElementById("wrongGuesses").innerHTML = wrongLetters;
		//Check if won
		if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
			winCount++;
			alert("You Won!");

			//Update Win projection in HTML
			document.getElementById("winCounter").innerHTML = winCount;

			startGame();
		}

		//Check if user lost
		else if (guessesLeft ==0) {
			lossCount++;
			alert("You Lose!");
		//Update Loss projection in HTML
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame();
			}
		}
		
	startGame();

	//Register Key Clicks

	document.onkeyup = function(event){
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		checkLetters(letterGuessed); 
		roundComplete();

	console.log(letterGuessed);

		
	}

