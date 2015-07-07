/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
// toggle a random index in a row that is passed to recurse
//check if there are any conflicts
//if there are conflicts recursively call setRow on that row 
//if there are no conflicts, call set row on the next row;
  var counter =0;
  var setRow = function(row){
    var ind = Math.floor(Math.random() * n);
    solution.togglePiece(row, ind);
    if(solution.hasAnyRooksConflicts()){
      solution.togglePiece(row, ind);
      setRow(row);
    } else {
      row++;
      if(row < n){
      setRow(row);        
      }
    }
  }
  setRow(counter);


//   var solution = [];
//   var indexes = [];

//   var recurse = function(n){
//     var arr = [];
//     var index = Math.floor(Math.random() * n);
//     if(indexes.indexOf(index) !== -1){
//       recurse(n);
//     } else {
//       indexes.push(index);
//       for(var i =0; i<n; i++){
//         if(index === i){
//           arr.push(1)
//         }else{
//           arr.push(0);
//             }
//           }
//           solution.push(arr);
//       }
//       if(solution.length<n){
//     recurse(n);
//   }
// }

// recurse(n);
solution = solution.rows();
console.log(solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;

  for(var i = 1; i<=n; i++){
    solutionCount = solutionCount*i;
  } 


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
