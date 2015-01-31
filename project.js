//Player object and Boss object.  
//Player will be referred to as 'Hero' and 
//The Boss will be referred to as 'Boss'.

/*var hero = {
	health: 100,
}

var boss = {
	health: 100
}
*/
//Battle sequence.
//Boss attack is random of 3 choices chosen at random, while
//player can choose between 3 different attacks.
//First to 0 health points loses

/*while (hero.health > 0 || boss.health > 0) {
	
}*/

//Greeting array.
var greetingArray = [
[0, "HERO! You've arrived!  We've been waiting for you!"],
[1, "The BOSS will be here shortly, and no one here can defeat him!"],
[2, "We need YOU to DEFEAT THE BOSS!"],
[3, "You'll need to use your attacks to bring his health down to 0!"],
[4, "Be careful, though... because he'll attack you, too!"],
[5, "... oh no..."],
[6, "Did you hear that...?"],
[7, "...."],
[8, "HE'S HERE! HERO, please! DEFEAT THE BOSS!!"],
];

//Alert function.  Loops through an array of messages.
function alertToPlayer (array){
	for(i=0; i<array.length; i++){
		alert(array[i][1]);
	}
	return;
};

