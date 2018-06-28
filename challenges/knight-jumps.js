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
  str = str.slice(1, 4).split(' ');
  const x = Number(str[0]);
  const y = Number(str[1]);
  let moveCount = 0;

  if (x > 8 || y > 8 || x < 1 || y < 1) {
    return 0;
  }

  if (x + 2 <= 8 && y + 1 <= 8) moveCount += 1;
  if (x + 2 <= 8 && y - 1 >= 1) moveCount += 1;
  if (x + 1 <= 8 && y + 2 <= 8) moveCount += 1;
  if (x + 1 <= 8 && y - 2 >= 1) moveCount += 1;

  if (x - 2 >= 1 && y + 1 <= 8) moveCount += 1;
  if (x - 2 >= 1 && y - 1 >= 1) moveCount += 1;
  if (x - 1 >= 0 && y + 2 <= 8) moveCount += 1;
  if (x - 1 >= 0 && y - 2 >= 1) moveCount += 1;

  return moveCount;
}
// console.log(knightjumps('(1 4)'));
module.exports = knightjumps;
