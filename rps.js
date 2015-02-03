console.log("something");

//1. Welcome

//Boss Constructor
function Boss(name, health, damage) {
this.name = name;
this.health = 100;
this.damage = Math.floor((Math.random() * 35) + 5);
}

var theBoss = new Boss("THE BOSS");

//Welcome message
alert("Welcome to BOSS FIGHT!");
alert("Please, hero... It is up to you to defeat " + theBoss.name + "!");


//Objective
alert("We don't have much time for questions... just know that you need to attack " + theBoss.name + " and bring his health to zero before he does the same to you!");


//Hero Constructor
function User(health) {
this.health = 100;
}

var hero = new User();

//2. The Weapon

//Weapon Constructor
function Weapon(name, attack1, attack2, attack3) {
this.name = name;
this.attack1 = attack1;
this.attack2 = attack2;
this.attack3 = attack3;
}

var staff = new Weapon("STAFF", "FIREBALL", "DRAIN", "FORCEFIELD");

//Attack Constructor
function Attack(name, damage, restoration) {
this.name = name;
this.damage = damage;
this.restoration = restoration;
}
//Attack Random Damage Function
function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}

var fireball = new Attack("FIREBALL", getRandomArbitrary(13, 28), 0);
var drain = new Attack("DRAIN", getRandomArbitrary(7, 15), getRandomArbitrary(7, 15));
var forcefield = new Attack ("FORCEFIELD", 0, getRandomArbitrary(18, 28));

//Staff details message
alert("Oh no! He's almost here!!! Quick, take this " + staff.name + "!");
alert("This " + staff.name + " will help you defeat " + theBoss.name + " with 3 magical attacks: " + staff.attack1 + ", " + staff.attack2 + ", and " + staff.attack3 + "!");
alert("Please, choose your attacks wisely.  You're the only one that can stop " + theBoss.name + "!");
alert("Good luck, hero!");


//3. The Fight
alert("..........");
alert("....");
alert(" !!!!!!!!!! ");
alert(theBoss.name + " CHARGES TOWARD YOU WITH A VICIOUS ATTACK!");

//Statistics message

var fightStats = ("Your Health: " + hero.health + ".\nBoss Health: " + theBoss.health + ".");


//Fight start, prompt to choose first attack

var promptStaffAttack = ("Hero! Enter your attack (" + staff.attack1 + ", " + staff.attack2 + ", or " + staff.attack3 + ")!");


//FIGHT SEQUENCE
var fighting = (hero.health > 0 || theBoss.health > 0);


while (fighting) {

  alert(fightStats);
  var staffAttack = prompt(promptStaffAttack);
  
  switch (staffAttack) {
    case "fireball":
      theBoss.health = (theBoss.health - fireball.damage);
      hero.health = (hero.health - theBoss.damage);
      alert("Fireball deals " + fireball.damage + " damage to " + theBoss.name + "!\n" + theBoss.name + " attacked you for " + theBoss.damage + " damage!");
      break;
      
    case "drain":
  
      theBoss.health = (theBoss.health - drain.damage);
      hero.health = (hero.health - theBoss.damage + drain.restoration);
      alert("Drain deals " + drain.damage + " damage to " + theBoss.name + " and heals you for " + drain.restoration + " health!\n" + theBoss.name + " attacked you for " + theBoss.damage + " damage!");
    
       break;
      
    case "forcefield":
    
      theBoss.health = (theBoss.health - forcefield.damage);
      hero.health = (hero.health - theBoss.damage + forcefield.restoration);
      alert("Forcefield heals you for " + forcefield.restoration + "!/n" + theBoss.name + " attacked you for " + theBoss.damage + " damage!");
      
      break;
    
    default:
      prompt("Hurry, hero! Attack with " + staff.attack1 + ", " + staff.attack2 + ", or " + staff.attack3 + "!");
  }

}



//Loop back to statistics message, showing updated statistics


//4. The End
//Victorious variable

//Defeated variable

//Create IF / ELSE statement that shows appropriate message
//based on the results of THE FIGHT