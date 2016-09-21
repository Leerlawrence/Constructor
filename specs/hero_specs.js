var assert =require( 'assert' );
var Hero = require( '../hero' );
var Food = require( '../food' );


describe('Hero', function(){
  var pokeman;

  beforeEach(function(){
    pokeman = new Hero("Pokeman", 100, "Haggis");
    haggis = new Food("Haggis", 50);
    apple = new Food("Apple", 50);

  });

  it('should create a hero with a name ', function(){
    assert.equal("Pokeman", pokeman.name);
  })

  it('should create a hero with a health value ', function(){
    assert.equal(100, pokeman.health);
  })

  it('should say its name', function(){
    pokeman.talk();
    assert.equal("Hello Pokeman", pokeman.talk());
  })

  it('should eat food', function() {
    pokeman.eat(apple);
    assert.equal(150, pokeman.health);
  })

  it('should increase their health by 1.5 * value if fave food', function() {
    pokeman.eat(haggis);
    assert.equal(175, pokeman.health);
  })

  it('should fly over Edinburgh', function(){
    pokeman.fly();
    assert.equal("I'm flying over the streets of Edinburgh, I'm a bit too close to the Cast.....aaaaaaaahhhhhh!!!!!!!", pokeman.fly());
  })
  
  it('should wear pants over the troosers!' , function(){
    pokeman.pants();
    assert.equal("pants on!", pokeman.pants());
    console.log("");
    console.log("NOW, WHAT CAN I DO TO MAKE A GREAT FASHION STATEMENT!");
  })


  it('should learn to code in 16 weeks at CodeClan - nah - that\'s impossible even for me!!!!!!!!!' , function(){
    pokeman.code();
    assert.equal("Nearly there!", pokeman.code());
    console.log("");
    console.log("MY GREATEST POWER!");
  })

  it('AAAAGGGGHH! I\'ve just eaten a Scotch Bonnet - that\'s not a special power after all - DOH!!!!' , function(){
    pokeman.eatSB();
    assert.equal("Where\'s the water!", pokeman.eatSB());
    console.log("");
    console.log("GIVE ME WATER!");
  })
  
});



// describe('Solar_System', function(){

//   it('should create a solar system', function(){
//     var solarSys = new Solar_System("Pokeworld");
//     //assert.equal("Pokeworld", solarSys.name);
//     assert.deepEqual([], solarSys.planets);  //this allows you to check the array has been created.
//     var mars = new Planet("Mars");
//     solarSys.addPlanet( mars );
//   });
//   })

// });

