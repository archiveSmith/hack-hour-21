/**
* Part 1:
* You are given anele ofeles.  The sueles are first names and phone numbers.
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
  let phone = false;
  jazbook.forEach((ele) => {
    if (ele[0] === name) {
      phone = ele[1];
    }
  })
  return phone;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let phoneBook = {};
  jazbook.forEach((ele) => {
    phoneBook[ele[0]] = ele[1];
  });
  return phoneBook;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
