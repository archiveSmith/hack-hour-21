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
  return jazbook.forEach(element => {
    if(element[0] === name) return element[1];
  });

}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  jazbook.forEach((element, index) => {
    let entry = element;
    let obj = {};
    obj[element[0]] = element[1]
    jazbook.splice(index, 1, obj)
    return jazbook;
  })

  return jazbook;

}

makePhoneBookObject.prototype.add = function(entry) {
  let obj = {};
  obj[entry[0]] = entry[1];
  this.push(obj);
  

}
makePhoneBookObject.prototype.delete = function(entry){
  this.forEach(element => {
    if(element === entry) this.indexOf()
  })
}

jazbook = [
['alex','301-844-3421'],
['jae','301-844-1211'],
['david','301-844-0978'],
['travis','301-844-8505'],
['jasmine','1800-974-4539'],
];

console.log(makePhoneBookObject(jazbook))

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
