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
function Lobby() {
    LobbyDiscovered = true;
    clear();
    if (!check_time()) return;
    print("\nYou are in the Lobby hanging out.");
    print("\nWhere do you go?");
    print("Lounge");
    print("stay here");
 
	function processInput(input){
        if (input.toLowerCase() === "lounge") {
            Lounge();
        }
        else if (input.toLowerCase() === "stay here") {
            Lobby();
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
    print("stay here");

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
        else if (input.toLowerCase() === "stay here") {
            Lounge();
        }
	}
    waitForInput(processInput);
}
function Bathroom() {
    BathroomDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the Bathroom area.");
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
    if (!haveMark)
        print("\nDoor is locked.");
        print("You see a note from Mark and take it.");
        haveMark = true;
        print("\nGo get the key in the bathroom!");
	print("\nWhere would you like to go")
	print("Lounge")
	print("SecretRoom")

        function processInput(input) {
	if (input.toLowerCase() === "lounge") {
            Lounge();
        }
       else if (input.toLowerCase() === "secretroom") (haveMark && !haveKey)
        print("\nDoor is still locked.");
        function processInput(){
            Gym();
        }
}
	waitForInput(processInput);
}
function Bathroom() {
    BathroomDiscovered = true;
    if (!check_time()) return;
    if (haveMark && !haveKey) {
        print("\nYou find the key in the Bathroom.");
        haveKey = true;
	haveMark = true;
    }
    print("\nWhere do you go?");
    print("Lounge");
    print("stay here");{

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
    if (haveMark && haveKey)
        print("\nDoor is unlocked.");
        haveMark = true;
	haveKey = true;
        print("\nGo into the secretroom!");
	print("\nWhere would you like to go")
	print("Lounge")
	print("SecretRoom")

        function processInput(input) {
	if (input.toLowerCase() === "lounge") {
            Lounge();
        }
       else if (input.toLowerCase() === "secretroom" && haveKey)
        print("\nGOOOOOOOO")
        function processInput(){
            SecretRoom();
        }
}
	waitForInput(processInput);
}
function SecretRoom() {
    SecretRoomDiscovered = true;
    print("\nYou escaped!")
}
}
