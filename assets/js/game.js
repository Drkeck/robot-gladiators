
//function
var fight = function(enemy) {
    // keep track of who is first
    var isPlayerTurn = true;

    //randomize the turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (enemy.health > 0 && playerInfo.health > 0){
        if (isPlayerTurn) {
            if(fightOrSkip()) {
                // if true, leave fight.
                break;
            }
        
            // Subtract the value of 'playerInfo.attack' from the value of `enemy.health` and use that result to update the `enemy.health` var
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                enemy.health = Math.max(0, enemy.health - damage);
            // Log a resulting message to the console so we know it worked.
            console.log(
                playerInfo.name + " attacked " + enemy.name + " for " + damage + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
        
            // enemy.health check
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                //award for winning
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else {
                window.alert("you attacked " + enemy.name + " for " + damage + ". \n" + enemy.name + " still has " + enemy.health + " health left.");
            }
        } 
        else {
            
            // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update `playerInfo.health` values
            
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            // Log a resulting message to console so we know it worked.
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

            // if check for player health and or death.
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(enemy.name + " attacked you for: " + damage + ". \n" + playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        isPlayerTurn = !isPlayerTurn
    } 
};

//executing function
var startgame = function () {
    //player stats
    playerInfo.reset();
    //game end
    for(var i = 0; i < enemyInfo.length; i++) {
        if(playerInfo.health > 0) {
            window.alert("welcome to Robot Gladiators! Round: " + ( i + 1 ));
            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if user wants to go to store
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            break;
        }
    }
    endGame();
};
//endgame
var endGame = function() {
    window.alert("The Game has now ended. Lets see how you did!");

    //local storage for high score, if null use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0
    }

    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    }
    else {
        alert(playerInfo.name + " did not beat the high score of:\n " + highScore + ". \nmaybe next time");
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again");
            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fightOrSkip = function() {
    var promptFight = window.prompt('would you like to FIGHT or SKIP this battle?');
    if (promptFight === "" || promptFight === null) {
        window.alert("You'll need to provide a valid answer, try again please");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?" + "\n -10 money penelty to your existing balance of: " + playerInfo.money);
        if (confirmSkip) {
            window.alert(playerInfo.name + " has skipped this fight.");
            playerInfo.money =  Math.max(0, playerInfo.money - 10);
            
            return true;
        }
    }
    return false;
};

var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }
    console.log("Your robot's name is " + name)
    return name;
};


//player info obj
var playerInfo = {
    name: getPlayerName(),
    health:  100,
    attack:  10,
    money:  10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("refill player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

//loging player info
console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

//opponent
var enemyInfo = [
{
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];


startgame();