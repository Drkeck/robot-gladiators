
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
    while(enemyHealth > 0){
        // the ask
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
        //if
        if (promptFight === "fight" || promptFight === "FIGHT") {

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
            );

            // if check for player health and or death.
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            //if skip / NA input.
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm skip?
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
            //alert of skip
            window.alert(playerName + " has chosen not to fight!");
            //subtract money
            playerMoney = playerMoney - 2;
            }
            else {
                fight();
            }
        } else {
            window.alert("you need to pick a valid option. Try again!");
            
        }
    }
}
//executing function
 for(var i = 0; i < enemyNames.length; i++) {
     var pickedEnemyName = enemyNames[i];
     enemyHealth = 50;
     fight(enemyNames[i]);
 }