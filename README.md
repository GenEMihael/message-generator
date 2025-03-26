* Message Generator
*** By Michael Watson

** Description

This is a simple message generator. It takes 3 sentence stems, 3 numbers, and 3 single words or phrases and outputs a random combination of the three to create a random message every time the code is run. 

** Methodology

-3 arrays are created, "stems," "numbers," and "words."
-A random number generator is created using Math.floor() and Math.random().
-A function called "message" uses the number generator to create 3 random numbers, which are then used as the indexes for the arrays from the first step. 
-The function returns a sentence using the randomly selected index from each array.
-Finally, the "message" function is logged to the console, which is where the randomly generated message is displayed.