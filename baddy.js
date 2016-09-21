var Baddy = function(name){
  this.name=name;
}

Baddy.prototype={
  talk: function() {
    return "Aha, my name is " + this.name + "I have come to relinquish you of your world,  mwah aha";
  },

destroyTheWorld: function() {
   return "I have destroyed the world - nah nah ne nah!"
},

hijack: function() {
  return "got bat mobile!";
},

themeTune: function() {
   return "Ned Man - na na na na na na na na Ned Man!"
},



// pants: function() {
//   return "pants on!";
// },

// hijack: function() {
//   return "got bat mobile!";
// },



//   eat : function(food) {
//     if (this.faveFood === food.name) {
//       this.health += food.replenishmentValue * 1.5; 
//     } 
//     else {
//         this.health += food.replenishmentValue; 
//     }
//   }
}
    module.exports=Baddy;