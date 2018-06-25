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
  for (let i = 0; i < jazbook.length; i += 1) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  const jazbookObj = jazbook.reduce((acc, e) => {
    acc[e[0]] = e[1];
    return acc;
  }, {});
  jazbookObj.add = function add(name, number) {
    this[name] = number;
  };
  jazbookObj.find = function find(name) {
    return this[name];
  };
  jazbookObj.remove = function find(name) {
    delete this[name];
  };
  return jazbookObj;
}

// const jazbook = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539'],
// ];

// console.log(findName(jazbook, 'jae'));
// console.log(findName(jazbook, 'joe'));
// const p = makePhoneBookObject(jazbook);
// p.add('colin', '518-821-7481');
// console.log(p.find('colin'));
// p.remove('jae');

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
