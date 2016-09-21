var assert =require( 'assert' );
var Food = require( '../food' );

describe('Food', function(){
  var haggis;

  beforeEach(function(){
    haggis = new Food("Haggis", 50);
  });

  it('should create food with a name ', function(){
    assert.equal("Haggis", haggis.name);
  })

  it('should create replenishment value ', function(){
    assert.equal(50, haggis.replenishmentValue);
  })


});