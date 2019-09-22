# Instructions

Create a game where someone guesses a number between 1-100 and can see how close they are.
This will be a page on your blog.

1. Create HTML for:
    * Button which sets/resets the game
    * Input where the user can write their guess
    * Button to test guess
    * Area to show how many guesses have been submitted (the "number of tries zone")
    * Area to show how close the guess is (the "closeness zone").

2. Create a JS function that links to the "setup game" button which sets up the game by choosing a random number between 1-100 (look up Math.floor and Math.random). This number needs to be invisible to the user. As part of its reset functionality it also needs to reset the number of previous guesses (see part 4)

3. Create a JS function that links to the "test guess" button which compares the guess to the random number in the following way:
    * If the guess is more than 50 off print "Freezing" to the closeness zone
    * If the guess is between 20-50 off print "Cold" to the closeness zone
    * If the guess is between 10-19 off print "Warm" to the closeness zone
    * If the guess is between 5-9 off pring "Hot" to the closeness zone
    * If the guess is less than 5 off print "Boiling" to the closeness zone
    * If the guess is correct then congratulate the user.

4. As part of the function that tests the guess, have a counter that ticks up each time a guess is made and print it to the number of tries zone

## Stretch

Arrange the game so that the variables and functions are all contained inside of an object.
