// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function parseNum(num) {
  const stringArr = num.toString().split('');
  let numTwos = 0;
  stringArr.forEach((n) => {
    if (n === '2') numTwos += 1;
  });
  return numTwos;
}

function countTwos(num) {
  if (num < 2) return 0;
  let numTwos = 0;
  for (let i = 1; i < num + 1; i += 1) {
    numTwos += parseNum(i);
  }
  return numTwos;
}

module.exports = countTwos;
