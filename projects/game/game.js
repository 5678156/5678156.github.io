let gameActive = true; 
let haveKey = false;
let openDoor = false;
let day = 0;
let gameActive = true;
let lobbyDiscovered = true;
let LoungeDiscovered = false;
let BathroomDiscovered = false;
let GymDiscovered = false;
let GameRoomDiscovered = false;
let SecretRoomDiscovered = false;




//this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function lobby() 
{
    clear();
    print("\nYou are in the lobby!");
	print
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tLounge");
    
    function processInput(input){
        if (input.toLowerCase() === "lounge") {
            Lounge();
        } else {
            stayHere();
            waitThenCall(lobby);
	    print("\nYou have been caught by Mason!");
		print("\nYou lost!")
        }
    }
  if (day < 5) {
        print("\nwould you like to try again tomorrow? Say yes or no");
        function processInput(input){
            if (input.toLowerCase() === "yes") {
                day++;
                minutes = 0;
                haveCup = false;
                cupIsFull = false;
                start();
            } else if (input.toLowerCase() === "no") {
                print("\nok, better luck next time!");
                gameActive = false;
            } else {
                print("Please type 'yes' or 'no'");
            }
        }

        waitForInput(processInput);
    } else {
        gameActive = false;
    }
}

    waitForInput(processInput);
}

function Lounge() {
    clear();
    print("\nYou are in the Lounge!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlobby");
    
    function processInput(input){
        if (input.toLowerCase() === "lobby") {
            lobby();
        } else {
            stayHere();
            waitThenCall(Lounge);
		print("\nMason caught youuuuu!")
		print("\nYou lose!")
        }
    }
  if (day < 5) {
        print("\nwould you like to try again tomorrow? Say yes or no");
        function processInput(input){
            if (input.toLowerCase() === "yes") {
                day++;
                minutes = 0;
                haveCup = false;
                cupIsFull = false;
                start();
            } else if (input.toLowerCase() === "no") {
                print("\nok, better luck next time!");
                gameActive = false;
            } else {
                print("Please type 'yes' or 'no'");
            }
        }

        waitForInput(processInput);
    } else {
        gameActive = false;
    }
}

    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to Mason's Demise! Type start to start");

    function processInput(input){
	    if (input.toLowerCase() === "start") {
            lobby();
	   } else {
		   print("\nError! " +
			   "You have to type start to start!");
		   print("\nPleaseee type start this time!")
		   
    }
    waitForInput(processInput)
