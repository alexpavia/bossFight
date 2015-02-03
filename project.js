////////////////MESSAGE ARRAYS/////////////////////////

//Alert function.  Loops through an array of messages.
function alertToPlayer (array){
	for(i=0; i<array.length; i++){
		alert(array[i][1]);
	}
};

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
[8, "HE'S HERE! HERO, please! DEFEAT THE BOSS!!"]
];



////////////////OBJECTS/////////////////////////
//Player object and Boss object.  
//Player will be referred to as 'Hero' and 
//The Boss will be referred to as 'Boss'.

var hero = {
	health: 100,
	attacks: {
		punch: 15,
		shoot: 25,
		heal: 12
	}
};

var boss = {
	health: 100,
	attack: function getAttack(){
		var attackDamage = 0;
		var attackName = "";
		var randomAttack = [attackName, attackDamage];
		var value = Math.random();
		
		if(value < .25){
			attackName = "SUPER KICK";
			attackDamage = 30;
		}
		else if (value < .50){
			attackName = "SUPER PUNCH";
			attackDamage = 20;
		}
		else if (value < .75) {
			attackName = "SUPER HEAL";
			attackDamage = 10;
		}
		else {
			attackName = "SUPER MISS";
			attackDamage = 0;
		}
	}
};


//Battle sequence.
//Boss attack is random of 3 choices chosen at random, while
//player can choose between 3 different attacks.
//First to 0 health points loses

while (hero.health > 0 || boss.health > 0) {
	
};
