// Global variables
let haveMark = false;
let haveKey = false;
let day = 0;
let minutes = 0;
let gameActive = true;
let loungeDiscovered = true;
let bathroomDiscovered = false;
let GameRoomDiscovered = false;
let lobbyDiscovered = false;
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
            lobby();
        }
    }
    waitForInput(processInput);
}
function getDayName(dayNum) {
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
    return days[dayNum];
}
function lobby() {
    lobbyDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the Lobby hanging out.");
    print("\nWhere do you go?");
    print("lounge");
    print("stay here");
    function processInput(input){
        if (input.toLowerCase() === "lounge") {
            lounge();
        }
        else if (input.toLowerCase() === "stay here") {
            lobby();
        }
    }
    waitForInput(processInput);
}

function Lounge() {
    loungeDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the lounge.");
    print("\nWhere do you go?");
    print("lobby");
    print("GameRoom");
    print("Bathroom");
    print("Gym");	
    print("stay in lounge");
    function processInput(input){
        if (input.toLowerCase() === "lobby") {
            lobby();
        }
        else if (input.toLowerCase() === "gameroom") {
            GameRoom();
        }
        else if (input.toLowerCase() === "bathroom") {
            Bathroom();
        }
	else if (input.toLowerCase() === "gym") {
	    Gym();
	}
        else if (input.toLowerCase() === "stay in lounge") {
            Lounge();
        }
    waitForInput(processInput);
}
function Bathroom() {
    BathroomDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the bathroom area.");
    print("\nWhere do you go?");
    print("Lounge");
    print("stay in bathroom");
    function processInput(input){
        if (input.toLowerCase() === "lounge") {
            Lounge();
        }
        else if (input.toLowerCase() === "stay in bathroom") {
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
	print("stay in Gym")
        function processInput() {
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
    bathroomDiscovered = true;
    if (!check_time()) return;
    if (haveMark && !haveKey) {
        print("\nYou find the key in the bathroom.");
        haveKey = true;
    }
    print("\nWhat do you do?");
    print("leave");{
    function processInput(input){
            Bathroom();
        }
        if (input.toLowerCase() === "leave") {
            Lounge();
        }
        else if (input.toLowerCase() === "stay in bathroom") {
	    Bathroom();
	}
    }
    waitForInput(processInput);
}
function GameRoom() {
    GameRoomDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the GameRoom.");
    print("\nWhere do you go?");
    print("Lounge");	
    print("stay in GameRoom");
    function processInput(input){
        if (input.toLowerCase() === "lounge") {
            Lounge();
        }
        else if (input.toLowerCase() === "stay in gameroom") {
            GameRoom();
        }   
    }
    waitForInput(processInput);
}
function SecretRoom() {
    SecretRoomDiscovered = true;
    print("\nYou escaped!")
