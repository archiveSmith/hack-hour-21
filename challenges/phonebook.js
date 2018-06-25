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
  let person = jazbook.find((elem)=>{
    return elem[0] === name;
  })

  if (person) {
    return person[1];
  } else {
    return false;
  }

}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

  let pBook = new Phonebook();
  jazbook.forEach( elem => {
    pBook.addEntry(elem[0], elem[1])
  });

  return pBook.entries;

}

class Phonebook {
  constructor () {
    this.entries = {}; // use objects to store key:value (name:phone-number)
  }

  // assume name to be unique
  addEntry(name, number){
    this.entries[name] = number;
  }

  getNumber(name){
    return this.entries[name];
  }

  removeEntry(name){
    delete this.entries[name];
  }

  get entries() {
    return this.entries;
  }
};



// jazbook = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539'],
// ];

// console.log(findName(jazbook, 'jae'));

// let properBook = makePhoneBookObject(jazbook);
// console.log(properBook);
// console.log(properBook.getNumber('david'));
// console.log(properBook.removeEntry('david'));
// console.log(properBook.getNumber('david'));
// properBook.addEntry('david', '867-5309');
// console.log(properBook.getNumber('david'));

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
