/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  let i = 0;
  do {
    if (jazbook[i][0] === name) return jazbook[i][1];
  } while (i++ < jazbook.length - 1)
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const pb = jazbook.reduce((pb, el) => {
    pb[el[0]] = el[1];
    return pb; 
  }, {});
  
  pb.find = name => {if(pb[name]) return pb[name]}; 
  pb.remove = name => delete pb[name];
  pb.add = (name, num) => pb[name] ? 'name already in phonebook' : pb[name] = num;

  return pb;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

let jazbook = [
    ['alex','301-844-3421'],
    ['jae','301-844-1211'],
    ['david','301-844-0978'],
    ['travis','301-844-8505'],
    ['jasmine','1800-974-4539'],
  ];

// let pb = makePhoneBookObject(jazbook);
// pb.add('wilbur', '123')
// console.log(pb)
// console.log(pb.find('wilbufr'))
// console.log(pb)
// console.log(pb.remove('jasmine'))
// console.log(pb)