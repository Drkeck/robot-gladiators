
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//loging player info
console.log(playerName, playerHealth, playerAttack);

//opponent
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//function
var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0){
        // the ask
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
        //if
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm skip?
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
            //alert of skip
            window.alert(playerName + " has chosen not to fight!");
            //subtract money
            playerMoney = playerMoney - 10;
            console.log("player", playerMoney);
            break;
            }
        }

            // Subtract the value of 'playerAttack' from the value of `enemyHealth` and use that result to update the `enemyHealth` var
        enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
            // enemyHealth check
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }

            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update `playerHealth` values
        playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to console so we know it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

            // if check for player health and or death.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
            }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
           
    
    }
}

//executing function
var startgame = function () {
    //player stats
    playerHealth = 100;
    playerAttack = 10
    playerMoney = 10

    //game end
    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert("welcome to Robot Gladiators! Round " + ( i + 1 ) + "!");
     
            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if user wants to go to store
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over");
            break;
        }
    }
    endGame();
};
//endgame
var endGame = function() {
     //if player is alive they win, else they have lost their robot in battle.
     if (playerHealth > 0) {
         window.alert("Great job, you've survived the game! You have a score of " + playerMoney + ".");
     }
     else {
         window.alert("you've lost your robot in battle.");
     }
     var playAgainConfirm = window.confirm("Would you like to play again?");

     if (playAgainConfirm) {
         startgame();
     }
     else {
         window.alert("Thank you for playing Robot Gladiators! Come back soon!");
     }
};
//Shop
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //up player health
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //up player attack
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney -7;
            }
            else {
                window.alert("You don't have enough money")
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            break;
        default:
            window.alert("You did not pick a valid option. Try again");

            shop();
            break;
    }
};

startgame();