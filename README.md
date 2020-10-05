# passwordGenerator

This assignment required a javascript-based PW generator. 

Started with setting up the arrays of UTF codes to be converted into a string of their respective character 

Used UTFs since, at the time, it seemed like it would save me tedium in typing out each character & the loop that would convert these to the characterss they represented would be used to indicate what would be passed through and to ensure at least one char of each type would be used. These UTF arrays were only translated into their characters if the user opted to use the char type (through the UTF converter function)



The next step was to sort out how many of each character would be used. Then, in the next loop, the count of each randomly numerated, selected, character would be decreased and pulled from in a random order to assign chars into a random position--  this is returned to the site as the user's pw