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
  const row = [true, true, true, true, true, true, true, true];
  const board = Array(8).fill([...row], 0, 8);
  const knightPos = [Number(str[1]), Number(str[3])];
  const checkMove = (xOffset, yOffset) => {
    if (board[knightPos[0] + xOffset] && board[knightPos[0] + xOffset][knightPos[1] + yOffset]) {
      board[knightPos[0] + xOffset][knightPos[1] + yOffset] = false;
      return 1;
    }
    return 0;
  };
  let availableMoves = 0;
  availableMoves += checkMove(-2, -1);
  availableMoves += checkMove(-2, 1);
  availableMoves += checkMove(2, -1);
  availableMoves += checkMove(2, 1);
  availableMoves += checkMove(-1, -2);
  availableMoves += checkMove(-1, 2);
  availableMoves += checkMove(1, -2);
  availableMoves += checkMove(1, 2);
  return availableMoves;
}

// const s = '(1 0)';

// console.log(knightjumps(s));

module.exports = knightjumps;
