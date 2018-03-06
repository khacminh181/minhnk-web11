'use strict'

function search(input, target) {
  for(var index = 0; index < input.length; index++){
    // console.log(input[i]);
    if(input[index] == target){
      return index;
    }
  }
  return -1;
  //return  input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
