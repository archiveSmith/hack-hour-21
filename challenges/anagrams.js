/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings. What time complexity is your solution?a
 *
 *
 * Stefan's note:
 * is this the same as asking for all permutations?
 *
 * A string of length n has n! permutations
 *
 * attempt to use Heap's method as found at
 * https://en.wikipedia.org/wiki/Heap%27s_algorithm
 * 
 *
 *
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function anagrams(string) {

    let perms = [];
    let arr = string.split('');
    
    function permute(arr, n) {
        n = n || arr.length;
        if (n === 1) {
            perms.push(arr.join(''));
            return
        } else {
            for (var i = 1; i <= n; i += 1) {
                permute(arr, n - 1);
                if (n % 2 === 0) {
                    swap(arr, i - 1, n - 1);
                } else {
                    swap(arr, 0, n - 1);
                }
            }
        }
    }
    
    permute(arr);
    return perms;
}

// console.log(anagrams('abc'));

module.exports = anagrams;
