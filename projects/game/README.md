# Run From Mason

## Setting

This game takes place at the Arlington Career Center. I tried to f
faithfully recreate it, with the exception of moving the 
library to the first floor.

## Map

```mermaid
graph TD;
    Lobby(((Lobby)))<-->Lounge;
    Bathroom<-->Lounge;
    Lounge<-->Gym;
    Gym<-->SecretRoom;
```

The player starts in the lobby, and then starts in the lobby.
They can explore, but must eventually make their way to the gym.

## Story

When the user gets to gym, they learn that the door to escape is locked.
They must go to the bathroom and get the key, and then unlock the door to finally e

The game starts 15 minutes before the morning class bell, and each
move costs 1 minute. So this journey must be completed in 15 moves.
Some moves (like reading a book in the library) cost extra time.

## Global Variables

The most important variables are
`haveCup` and `cupIsFull`, both
booleans that track progress in the
story. Depending on these two variables,
some rooms will display different things. For example, if you walk into the
library without the cup, it will prompt you to
read. If you walk in with the cup, it will show
the librarian filling the cup with coffee.

I also have numeric variables called `day` and `minute` which keep track of 
time. `minute` starts at 0 and counts up
with each move.

I have a little HUD map, and use a bunch of 
boolean variables to control which
rooms the player has discovered. A map is only displayed after the user
visits it.
