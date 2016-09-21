var Rat = function(){
//   this.name=name;
//   this.health=health;
//   this.faveFood=faveFood;
}

Rat.prototype={
  touchFood: function(food) {
    return "Poisoned" //"Hello " + this.name;
    //this.poisoned="True"
  },

  // eat : function(food) {
  //   if (this.faveFood === food.name) {
  //     this.health += food.replenishmentValue * 1.5; 
  //   } 
  //   else {
  //       this.health += food.replenishmentValue; 
  //   }
  // }
}
    module.exports=Rat;