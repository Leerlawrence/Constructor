var assert =require( 'assert' );
var Hero = require( '../hero' );
var Food = require( '../food' );
var Rat = require( '../rat' );

beforeEach(function(){
    //pokeman = new Hero("Pokeman", 100, "Haggis");
    haggis = new Food("Haggis", 50);
    //apple = new Food("Apple", 50);

  });

describe('Rat', function(){
  var rat;

  beforeEach(function(){
    rat = new Rat("");
    // haggis = new Food("Haggis", 50);
    // apple = new Food("Apple", 50);

  });

  it('should touch food and poison it', function(){
    rat.touchFood(haggis);
    assert.equal("Poisoned", rat.touchFood()  );
  })

  // it('should create a hero with a health value ', function(){
  //   assert.equal(100, pokeman.health);
  // })

  // it('should say its name', function(){
  //   pokeman.talk();
  //   assert.equal("Hello Pokeman", pokeman.talk());
  // })

  // it('should eat food', function() {
  //   pokeman.eat(apple);
  //   assert.equal(150, pokeman.health);
  // })

  // it('should increase their health by 1.5 * value if fave food', function() {
  //   pokeman.eat(haggis);
  //   assert.equal(175, pokeman.health);
  // })


});