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
    let x = parseInt(str.split('')[1]);
    let y = parseInt(str.split('')[3]);
    let xgap = Math.abs(Math.abs(x-4)-4);
    let ygap = Math.abs(Math.abs(y-4)-4);
    let xam;
    let yam; 
    if(xgap < 2) xam = 1 + xgap;
    else xam = 4;
    if(ygap < 2) yam = 1 + ygap;
    else yam = 4;


    return xam + yam;

}
console.log(knightjumps("(5 0)"));


module.exports = knightjumps;
