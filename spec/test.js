var myFunctions = require("../src/underscore");
var expect = require("chai").expect;

// all of these tests are pending...make sure to add , function(){ expect ....}

describe('first', function() {
  it('should be able to pull out the first element of an array', function(){

    expect(myFunctions.first([1,2,3])).to.equal(1);
    // this expects the "first" fn in myFunctions to return "1" when the array 
    //argument is passed by itself.

  });

  it('should be able to accept a user-defined index first([1,2,3],2) should return [1,2]', 
    function(){
      expect(myFunctions.first([1,2,3],2)).to.eql([1,2]);
    });

  });


describe('last', function() {
  it('should pull the last element from an array',
    function(){
      expect(myFunctions.last([1,8,9,10])).to.equal(10);
    });

  it('should accept an index argument', function(){
    expect(myFunctions.last([1,8,9,10],2)).to.eql([9,10]);
  });

  it('should return nothing if zero is passed in as the index', function(){
        expect(myFunctions.last([1,8,9,10],0)).to.equal(undefined);

  });

  it('should return all the array\'s elements if the index argument' +
    'is larger than the length of the array', function() {
        expect(myFunctions.last([1,8,9,10],7)).to.eql([1,8,9,10]);

    });

});

describe('uniq', function() {
  it('should return all unique values contained in an unsorted array', function(){
      expect(myFunctions.uniq(['d','d','t','w','g',5,'g','w','a','a','b','c','i'])).to.eql(['d','t','w','g',5,'a','b','c','i']);


  }

    );
});


describe('pluck', function() {
  it('should return values contained at a user-defined property', function(){
    var people = [
      {name : 'moe', age : 30},
      {name : 'curly', age : 50}
    ];

    expect(myFunctions.pluck(people, 'name')).to.eql(['moe', 'curly']);

  });
    // var people = [
    //   {name : 'moe', age : 30},
    //   {name : 'curly', age : 50}
    // ];

    // expect(myFunctions.pluck(people, 'name')).to.eql(['moe', 'curly']);
});

describe('contains', function() {
  it('should return false if a collection does not contain a user-specified value', function(){
        expect(myFunctions.contains([4,5,6],3)).to.equal(false);

  });

  it('should return true if a collection contains a user-specified value', function(){
    expect(myFunctions.contains([  4,   5,   6], 5)).to.equal(true);


  });

});

describe('flatten', function() {
  it('can flatten nested arrays', function(){
    var nestedArray = [1, [2], [3, [[[4]]]]];

    expect(myFunctions.flatten(nestedArray)).to.eql([1,2,3,4]);
    
  })
    ;

});
