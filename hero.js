var Hero = function(name,health,faveFood){
  this.name=name;
  this.health=health;
  this.faveFood=faveFood;
}

Hero.prototype={
  talk: function() {
    return "Hello " + this.name;
  },

fly: function() {
  return "I'm flying over the streets of Edinburgh, I'm a bit too close to the Cast.....aaaaaaaahhhhhh!!!!!!!"
},

pants: function() {
  return "pants on!";
},

// hijack: function() {
//   return "got bat mobile!";
// },

code: function() {
  return "Nearly there!";
},

eatSB: function() {
  return "Where\'s the water!";
},

  eat : function(food) {
    if (this.faveFood === food.name) {
      this.health += food.replenishmentValue * 1.5; 
    } 
    else {
        this.health += food.replenishmentValue; 
    }
  }
}
    module.exports=Hero;


// Create a constructor to create a Hero character.
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// B.

// Create a food constructor.
// Food should have a name
// Food should have a replenishment value
// C.

// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.