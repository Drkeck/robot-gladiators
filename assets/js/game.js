
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//loging player info
console.log(playerName, playerHealth, playerAttack);

//opponent
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//function
var fight = function() {
    // alert users that they are starting the round
    window.alert("welcome to Robot Gladiators!");
    // Subtract the value of 'playerAttack' from the value of `enemyHealth` and use that result to update the `enemyHealth` var
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    // enemyHealth check
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update `playerHealth` values
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to console so we know it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
//executing function
 fight();