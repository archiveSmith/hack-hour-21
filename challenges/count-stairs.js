/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
    //determines how many 2's and 1's;
    //producing array of strings that are unique
    //for each unique string, find the possible combinations
    let pattern = [];
    let combores = [];
    let result = [];
    let nn = n;
    let ones;
    let first = '';
    let two = n / 2;
    for ( let i = 0; i < two; i++){
        individual = '2'.repeat(i);
        console.log("here is the individual", individual)
        n = nn;
        console.log('check', n-2*i)
        while(n - 2 * i > 0){
            if (individual === ''){
                first += '1';
                console.log("here starts the ones", first)
                n -- ;
            }else{
                individual += '1';
                console.log("here starts the two", individual)
                n -- ;
            }
        }
        pattern.push(individual);
        pattern.push(first);
    }
    pattern = [...new Set(pattern)];
    pattern.splice(pattern.indexOf(''), 1);
    console.log("here is the pattern", pattern)
    function combo(pattern, final='') {
        console.log("here is the final", final);
        if (pattern.length === 0) return result.push(final);
        for (let p = 0; p < pattern.length; p++){

            let starting = pattern[p];
            let remaining = pattern.replace(starting,'');
            console.log("REMAINGIN!!!!", remaining);
            combo(remaining, final.concat(starting));
        }
        return
        // return result;
        console.log(result);
    }
    for(let i = 0; i<pattern.length; i++){
        console.log("here is the pattern pattern :P", pattern[i])
        combo(pattern[i]);
        console.log("Here is END", result);
    }
    return [...new Set(result)];
    // return pattern;
}

console.log("countStairs", countStairs(6));

module.exports = countStairs;
