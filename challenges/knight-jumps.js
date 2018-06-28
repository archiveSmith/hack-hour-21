// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const x = Number(str[1]);
  const y = Number(str[3]);
  let jumps = 0;
  // check each of the 8 moves
  // right jumps
  if (x + 2 <= 8) {
    if (y + 1 <= 8) jumps += 1; 
    if (y - 1 >= 1) jumps += 1; 
  }
  // left jumps
  if (x - 2 >= 1) {
    if (y + 1 <= 8) jumps += 1; 
    if (y - 1 >= 1) jumps += 1; 
  }
  // up jumps
  if (y + 2 <= 8) {
    if (x + 1 <= 8) jumps += 1; 
    if (x - 1 >= 1) jumps += 1; 
  }
  // down jumps
  if (y - 2 >= 1) {
    if (x + 1 <= 8) jumps += 1; 
    if (x - 1 >= 1) jumps += 1; 
  }
  return jumps;
}

// console.log(knightjumps('(1 5)'))

module.exports = knightjumps;
