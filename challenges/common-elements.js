// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// BRUTE FORCE -- O(n^2)
// function commonElements(array1, array2, array3, array4) {
//   return array1.reduce((acc, e, i) => {
//     if (array2.includes(e) && array3.includes(e) && array4.includes(e) && !acc.includes(e)) acc.push(e);
//     if (i === array1.length - 1 && acc.length === 0) acc = 'Nothing in Common!';
//     return acc;
//   }, []);
// }

// O(2n)
function commonElements(array1, array2, array3, array4) {
  const cache = {};
  for (let a = 0; a < 4; a++) {
    const array = arguments[a];
    for (let i = 0; i < array.length; i++) {
      const e = array[i];
      const iStr = (a + 1).toString(10);
      if (!cache[e]) cache[e] = iStr;
      else if (cache[e][cache[e].length - 1] !== iStr) cache[e] += iStr;
    }
  }
  const result = [];
  for (let key in cache) {
    if (cache[key] === '1234') result.push(key);
  }
  return result.length ? result : 'Nothing in Common!';
}

// console.log(commonElements(array1, array2, array3, array4));


module.exports = commonElements;
