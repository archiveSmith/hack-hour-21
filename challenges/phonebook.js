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
  let number = false;
  jazbook.forEach(person => {
    if (person[0] === name) number = person[1];
  });
  return number;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const phonebook = {};
  phonebook.findName = name => phonebook[name] ? phonebook[name] : false;
  phonebook.remove = name => delete phonebook[name];
  phonebook.add = (name, number) => phonebook[name] = number;
  jazbook.forEach(person => {
    phonebook[person[0]] = person[1];
  });

  return phonebook;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

// let booko = makePhoneBookObject([
//      ['alex','301-844-3421'],
//      ['jae','301-844-1211'],
//       ['david','301-844-0978'],
//       ['travis','301-844-8505'],
//       ['jasmine','1800-974-4ß539'],
//     ], 'jasmine');

// // booko.add('chris', '888-999-1111');
// // booko.remove('david');
// // console.log(booko);
// booko.findName('alex');

module.exports = objectToExport;
