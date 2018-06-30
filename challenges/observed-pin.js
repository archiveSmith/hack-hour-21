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

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
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


function getPINs(observed) {
  // need to include the original
  let combos = [];
  let keypad = {
    '0': '08',
    '1': '124',
    '2' : '2135',
    '3' : '326',
    '4' : '4157',
    '5' : '52468',
    '6' : '6359',
    '7' : '748',
    '8' : '87590',
    '9' : '968',
  }

  // go through each digit our observed
  // and build up our combinations 1 digit at a time
  // and then save the temp array to process for the next iteration in the out loop
  
  // start it with possibilities of the first digit, including itself
  let temp=keypad[observed[0]].split('');
  // console.log(temp);
  for(let ob=1; ob<observed.length; ob++){
    let working=[];
    let ob_digit_possibilities = keypad[observed[ob]];
    
    // go through our temp array of intermediate combinations
    for(let t=0; t<temp.length; t++){

      // add on the combination with the additional digit
      for(let poss=0; poss<ob_digit_possibilities.length; poss++){
        working.push( temp[t] + ob_digit_possibilities[poss]);
      }
    } 
    temp=[...working];// save it for the next iteration
  } 
  
  combos = temp;
  // console.log(combos);
  
  return combos;
}
// 
// console.log(getPINs('11'));
// console.log(getPINs('1963'));
// console.log(getPINs('369'))

module.exports = getPINs