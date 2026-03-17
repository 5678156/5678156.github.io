// Global variables
let haveMark = false;
let haveKey = false;
let day = 0;
let minutes = 0;
let gameActive = true;
let LobbyDiscovered = true;
let BathroomDiscovered = false;
let LoungeDiscovered = false;
let GymDiscovered = false;
let SecretRoomDiscovered = false;
// Game functions
function check_time() {
    clear();
    minutes++;
    if (minutes >= 15) {
        tardy();
        return false;
    } else {
        print("---");
        print("It is 7:" + (45+minutes) + ". Mason comes in " + (15 - minutes) + " minutes");
        print("---");
        return true;
    }
}
function tardy() {
    print("You didn't make it out in time, so you fail");
    if (day < 5) {
        print("\nWould you like to try again tomorrow? Say yes or no");
        function processInput(input){
            if (input.toLowerCase() === "yes") {
                day++;
                minutes = 0;
                haveMark = false;
                haveKey = false;
                start();
            } 
            else if (input.toLowerCase() === "no") {
                print("Ok, better luck next time!");
                gameActive = false;
            }
        }
        waitForInput(processInput);
    }
}
function start() {
    clear();
    print("Happy " + getDayName(day) + "!");
    print("\nYou've arrived home.");
    print("It is 3:00pm and Mason will find you in 15 minutes.");
    print("\nType Start to open the door");
    function processInput(input){
        if (input.toLowerCase() === "start") {
            Lobby();
        }
    }
    waitForInput(processInput);
}
function getDayName(dayNum) {
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
    return days[dayNum];
}
function caughtByMason() {
	clear();
	print("You should have not have chosen to stay...");
	setTimeout(function() {
	print("Mason walks in and catches you!");
	setTimeout(function() {
	print("GAME OVER");
	},2000);
},2000);
    if (day < 5) {
	    setTimeout(function() {
        print("\nWould you like to try again tomorrow? Say yes or no");
	    },2500);
        function processInput(input){
            if (input.toLowerCase() === "yes") {
                day++;
                minutes = 0;
                haveMark = false;
                haveKey = false;
                start();
            } 
            else if (input.toLowerCase() === "no") {
                print("Ok, better luck next time!");
                gameActive = false;
            }
        }
        waitForInput(processInput);
    }
}
function Lobby() {
    LobbyDiscovered = true;
    clear();
    if (!check_time()) return;
    print("\nYou are in the Lobby hanging out.");
    print("\nWhere do you go?");
    print("Lounge");
    print("stay");
    print("lobby");
 
	function processInput(input){
        if (input.toLowerCase() === "lounge") {
            Lounge();
        }
        else if (input.toLowerCase() === "lobby") {
            Lobby();
        }
	else if (input.toLowerCase() === "stay") {
		caughtByMason();
	}
    }
    waitForInput(processInput);
}

function Lounge() {
    LoungeDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the Lounge chilling.");
    print("\nWhere do you go?");
    print("Lobby");
    print("Bathroom");
    print("Gym");	
    print("stay");
    print("lounge");

	function processInput(input){
        if (input.toLowerCase() === "lobby") {
            Lobby();
        }
        else if (input.toLowerCase() === "bathroom") {
            Bathroom();
        }
	else if (input.toLowerCase() === "gym") {
	    Gym();
	}
        else if (input.toLowerCase() === "stay") {
            Lounge();
        }
	else if (input.toLowerCase() === "lounge") {
		caughtByMason();
	}
	}
    waitForInput(processInput);
}
function Bathroom() {
    BathroomDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the Bathroom area."); 
    if (haveMark) {
        print("\nYou find the key in the Bathroom and take it.");
        haveKey = true;
    }
    print("\nWhere do you go?");
    print("Lounge");
    print("stay here");

	function processInput(input){
        if (input.toLowerCase() === "lounge") {
            Lounge();
        }
        else if (input.toLowerCase() === "stay here") {
            Bathroom();
        }
    }
    waitForInput(processInput);
}
function Gym() {
    GymDiscovered = true;
    if (!check_time()) return;
    if (!haveMark) {
        haveMark = true;
        print("\nGo get the key in the bathroom!");
    }
    if (haveKey) {
        print("\nDoor is unlocked.");
        print("\nGo into the secretroom!");
	print("\nWhere would you like to go")
	print("Lounge")
	print("SecretRoom")
      } else {
	      print("\nDoor is still locked.");
	      print("\nWhere would you like to go?");
	      print("Lounge")
	print("SecretRoom")

        function processInput(input) {
	if (input.toLowerCase() === "lounge") {
            Lounge();
        }
	else if (input.toLowerCase() === "secretroom" && haveKey) {
		SecretRoom();
	}
       else if (input.toLowerCase() === "secretroom" && !haveKey) {
        print("\nDoor is still locked.");
            Gym();
        }
}
	waitForInput(processInput);
}
function SecretRoom() {
    SecretRoomDiscovered = true;
    if (!check_time()) return;
    print("\nYou escaped!");
}
}
}
