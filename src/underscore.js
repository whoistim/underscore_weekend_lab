var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    if (n === undefined) {
      return array[0];
    }
    else {
      array.length = n;
      // var arr = [];
      // for(i=0; i<n;i++){
      //   arr.push(array[i]);
      }
      return array;
    

  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    // if(Array.isArray(array)){
      
      if(n<=0){
        return;
      }


      if (n === undefined){
        var num = array[(array.length)-1];
        return(num);
      }

      else {
        var newArray = [];
        lengthA = array.length;
        minA = Math.min(lengthA, n);
        newArray = array.slice((lengthA - minA),array.length);
        return(newArray);

      }
    },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var unqArr = []; //create an empty array.
    array.forEach(function(tester){//go over the array. each item becomes "tester"
      if(unqArr.indexOf(tester)===-1){//if "tester" has no index value in unqArr,
        unqArr.push(tester);//push it to unqArr. Otherwise keep going.
      }
    });
    return(unqArr);//return the array.

  },

  // Takes an array of objects and returns an array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var names = [];
    array.forEach(function(obj){
      names.push(obj[key]);

    });
    // console.log(names);
    return(names);
    // var names = array.forEach(){
    //   return(array.key);
    // }
    // var name = [];
    // array.forEach(function(){
    //   name = this;
    //   console.log(name.key);
    //   arrB.push(name.key);

    // });
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
  // array.forEach(function(num){
  //   if(num === target)
  //   {
  //     return(true);
  // }
  // });
    for(i=0; i<array.length; i++)
    if(array[i] === target){
      return(true);
    }
  return(false);
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
  var myArray = [];
  for(i=0;i<array.length;i++) {
    // console.log(array[i]);

    if(!Array.isArray(array[i])){
      myArray.push(array[i]);
    }
    else{myArray = myArray.concat(myFunctions.flatten(array[i]));
  }
}    console.log(myArray);

  return(myArray);

}

};
module.exports = myFunctions;
