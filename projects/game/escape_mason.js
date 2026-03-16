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
        print("It is 7:" + (45+minutes) + ". Class starts in " + (15 - minutes) + " minutes");
        print("---");
        return true;
    }
}
function tardy() {
    print("You didn't make it to class on time, so you fail");
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
    print("\nYou've arrived at school.");
    print("It is 7:45am and class starts in 15 minutes.");
    print("\nType Start to get off the bus");
    function processInput(input){
        if (input.toLowerCase() === "start") {
            lounge();
        }
    }
    waitForInput(processInput);
}
function getDayName(dayNum) {
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
    return days[dayNum];
}
function GameRoom() {
    GameRoomDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the GameRoom playing games.");
    print("\nWhere do you go?");
    print("lounge");
    print("stay here");
    function processInput(input){
        if (input.toLowerCase() === "lounge") {
            lounge();
        }
        else if (input.toLowerCase() === "stay here") {
            GameRoom();
        }
    }
    waitForInput(processInput);
}
function Gym() {
    GymDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the Gym.");
    print("\nWhere do you go?");
    print("bathroom");
    print("SecretRoom");
    function processInput(input){
        if (input.toLowerCase() === "bathroom") {
            bathroom();
        }
        else if (input.toLowerCase() === "secretroom") {
            SecretRoom();
        }
    }
    waitForInput(processInput);
}
function bathroom() {
    bathroomDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the bathroom area.");
    print("\nWhere do you go?");
    print("lounge");
    print("Gym");
    function processInput(input){
        if (input.toLowerCase() === "lounge") {
            lounge();
        }
        else if (input.toLowerCase() === "gym") {
            Gym();
        }
    }
    waitForInput(processInput);
}
function SecretRoom() {
    SecretRoomDiscovered = true;
    if (!check_time()) return;
    if (!haveMark) {
        print("\nChris is asleep.");
        print("You see a note from Mark and take it.");
        haveMark = true;
        print("\nGo get the key in the lobby!");
        function processInput(){
            Gym();
        }
        waitForInput(processInput);
    }
    else if (haveMark && !haveKey) {
        print("\nChris is still asleep.");
        function processInput(){
            Gym();
        }
        waitForInput(processInput);
    }
    else {
        print("You give Chris the key.");
        print("Chris wakes up!");
        print("You saved the day!");
        gameActive = false;
    }
}
function lobby() {
    lobbyDiscovered = true;
    if (!check_time()) return;
    if (haveMark && !haveKey) {
        print("\nYou find the key in the lobby.");
        haveKey = true;
    }
    print("\nWhat do you do?");
    print("read a book");
    print("leave");
    function processInput(input){
        if (input.toLowerCase() === "read a book") {
            print("You read and lose track of time...");
            minutes += 5;
            lobby();
        }
        else if (input.toLowerCase() === "leave") {
            lounge();
        }
    }
    waitForInput(processInput);
}
function lounge() {
    loungeDiscovered = true;
    if (!check_time()) return;
    print("\nYou are in the lounge.");
    print("\nWhere do you go?");
    print("lobby");
    print("GameRoom");
    print("bathroom");
    print("stay in lounge");
    function processInput(input){
        if (input.toLowerCase() === "lobby") {
            lobby();
        }
        else if (input.toLowerCase() === "gameroom") {
            GameRoom();
        }
        else if (input.toLowerCase() === "bathroom") {
            bathroom();
        }
        else if (input.toLowerCase() === "stay in lounge") {
            lounge();
        }
    }
    waitForInput(processInput);
}

