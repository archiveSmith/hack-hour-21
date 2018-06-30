/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the
PIN he saw, when Robby entered it.

The keypad has the following layout:
      ┌───┬───┬───┐
     │ 1 │ 2 │ 3 │
    ├───┼───┼───┤
   │ 4 │ 5 │ 6 │
  ├───┼───┼───┤
 │ 7 │ 8 │ 9 │
└───┼───┼───┘
   │ 0 │
  └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of lock. You can enter an unlimited amount of wrong PINs, they
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs.
But please note that all PINs, the observed one and also the results, must be strings, because of
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/

const neighbors = {
  0: ['0', '8'],
  1: ['1', '2', '4'],
  2: ['2', '1', '3', '5'],
  3: ['3', '2', '6'],
  4: ['4', '1', '5', '7'],
  5: ['5', '2', '4', '6', '8'],
  6: ['6', '3', '5', '9'],
  7: ['7', '4', '8'],
  8: ['8', '0', '5', '7', '9'],
  9: ['9', '6', '8'],
};

function getPINs(observed) {
  if (observed.length < 1) return [];
  if (observed.length === 1) return neighbors[observed];
  const output = [];
  const digits = observed.split('');
  const possible = [];
  for (let i = 0; i < digits.length; i += 1) {
    possible.push(neighbors[digits[i]]);
  }
  const permute = (poss, index = 0, string = '') => {
    if (index === poss.length - 1) {
      for (let i = 0; i < poss[index].length; i += 1) {
        string += poss[index][i];
        output.push(string);
        string = string.slice(0, -1);
      }
    } else {
      for (let i = 0; i < poss[index].length; i += 1) {
        string += poss[index][i];
        permute(poss, index + 1, string);
        string = string.slice(0, -1);
      }
    }
  };
  permute(possible);
  return output;
}

// console.log(getPINs('8'));
// console.log(getPINs('11'));
// console.log(getPINs('369'));


module.exports = getPINs