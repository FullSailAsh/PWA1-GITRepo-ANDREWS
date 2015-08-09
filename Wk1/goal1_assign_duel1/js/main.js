/*Ashlea Andrews
August 8, 2015
Week #1 :: { Homework } - ANALYZE Duel #1
 */

// begins self-executing function for the fight
(function(){

    console.log("FIGHT!!!"); //prints to console to initiate, shows files are correctly connected

//create and establish initial variables for program
    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage, each player can only "inflict" up to 20 for damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health, each player starts with "full" health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round, will keep track of what "round" of the fight the program is in
    var round=0;



    //first function within in the overall game function...will determine players damage to each player for each
    //"round" of the fight, randomly reducing it each time...will loop until one player reaches 0 health, or 10 rounds
    //have been played
    function fight(){
        //displays start message, with beginning health of each player
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        //begins a loop, if the game is under 10 rounds (max # of rounds, the function will execute...
        // will add an increment of one each time
        for (var i = 0; i < 10; i++)
        {
            //Need to decide random amount of damage for each player in round
            //random formula used is - Math.floor(Math.random() * (max - min) + min);
            //math.random creates a random number, math.floor will round it to an integer
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);//player 1's damage incurred
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);//player 2's damage incurred

            //inflict damage
            playerOneHealth-=f1; //deletes damage incurred from players health, same as playerOneHealth - f1
            playerTwoHealth-=f2; //establishes new players health from initial variable

            //output to console each player's current health
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner") //conditional statement to check if both players are alive
            {
                round++; //increment the round by 1, display current healths and round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{ //if both players aren't alive, winner check function will execute, alerting of winner
                alert(result);
                break; //will break out of, and exit the for loop
            };

        };
    };
    //second function within the overall game function, is called after each fight round, will determine if there is a
    //loser (health = zero or less) resulting in a winner, or if there is a tie (both players reach zero at the same time
    function winnerCheck(){
        var result="no winner"; // in case both players are still alive
        if (playerOneHealth<1 && playerTwoHealth<1) //first conditional, if player 1 & 2's health is less than one,
        {
            result = "You Both Die";//they both are dead
        } else if(playerOneHealth<1){ //check to see if they aren't both dead, check to see if player 1 is dead
            result =playerTwoName+" WINS!!!" //if so, player 2 wins
        } else if (playerTwoHealth<1) //if player 1 is not dead, then check player 2's health
        {
            result = playerOneName+" WINS!!!" //if player 2 is dead, player 1 wins
        };
        return result; //returns information to "winner check" established in above result variable
    };

    fight(); //call the fight function to begin

})();