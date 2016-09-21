var assert =require( 'assert' );
var Hero = require( '../hero' );
var Food = require( '../food' );
var Baddy = require('../baddy');

var baddyName; 

beforeEach(function(){
  baddyName = new Baddy("Ned Man, the scourge of Fife");
  });

describe('Baddy', function(){
  //var pokeman;


    it('should create a baddy with a good scottish name - I know....NED MAN!', function(){
      assert.equal("Ned Man, the scourge of Fife", baddyName.name);
    });

    it('should destroy the world', function(){
        baddyName.destroyTheWorld();
        assert.equal("I have destroyed the world - nah nah ne nah!", baddyName.destroyTheWorld());
        console.log("");
        console.log("BORED - WHAT SHALL I DO TODAY!");
      })

    it('should hijack the bat mobile!' , function(){
      baddyName.hijack();
      assert.equal("got bat mobile!", baddyName.hijack());
      console.log("");
      console.log("NEED A CAR TO GO FAE MA BUCKY AND OTHER MESSAGES!");
    })

    it('should get a baddy theme tune ', function(){
      baddyName.themeTune();
      assert.equal("Ned Man - na na na na na na na na Ned Man!", baddyName.themeTune());
      console.log("");
      console.log("WHAT DOES EVERY SELF RESPECTING BADDY NEED!");
    });


    
  });

