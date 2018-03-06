'use strict'

function randomNumber(a,b){
  return Math.floor((Math.random() * (b-a)) + a);
}

function search(input, target) {
  return input.indexOf(target); 
}

function sort(input) {
  return input.sort((a,b) => a-b);
}

function generate(testLengthArray){
  var result = new Array;
  for(let i=0;i<testLengthArray.length;i++){ 
    var x = new Array;
    var numberOfTestCases = testLengthArray[i];
    while(x.length < numberOfTestCases) {
      x.push(randomNumber(-1000,1000));
    }
    sort(x);
    var t;
    if(i==0) t = 1001;
    else if(i==1) t = x[0];
    else if(i==2) t = x[x.length-1];
    else t = x[randomNumber(1,x.length-1)]; 
    result.push({
      'input' : x,
      'target' : t,
      'output' : search(x,t)
    });
  }
  return result;



  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
}

module.exports = generate
