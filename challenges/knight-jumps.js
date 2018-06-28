// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"


/* knights can move relative to current space:
-2,1; 2,1;
-2,-1; 2,-1;
-1,2; 1,2;
-1,-2; 1,-2
*/
function knightjumps(str) {
  let moves = [
[-2,1], [2,1],
[-2,-1], [2,-1],
[-1,2], [1,2],
[-1,-2], [1,-2]
]

  let legalMoves = 0;

  posArr = str.replace(/[()]/g, '').split(' ').map(elem => parseInt(elem))
  // posArr = posArr.map( elem => parseInt(elem));
  // console.log(posArr);

  // calculate all the positions legal or off the board
  moves.map( (elem)=>{
    elem[0] += posArr[0];
    elem[1] += posArr[1];
  })
  // console.log(moves);

  // now filter for the legal moves...moves that are on the board
  // and then count the legal moves
  legalMoves = moves.filter((elem) => {
    return (elem[0] > 0 && elem[1] > 0);
  }).length

  // console.log(legalMoves);

  return legalMoves;
}

// console.log(knightjumps('(4 5)'));

module.exports = knightjumps;
