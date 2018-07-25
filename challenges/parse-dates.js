// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.
// The provided string will be in one of the formats below. Your function must
// return a Date object with the same month, day of month, hour, and minute
// as in the provided string. The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurence
//   that day of the week BEFORE today (e.g. if today is Wednesday and the string
//   'Wednesday 12:37 PM' is passed in, then the date you return should be 7 days ago,
//   the last time Wednesday occurred before today.)
// - If the date string starts with a month (e.g. Nov, Sep) assume that it's for this year.
//   Month abbreviations will always be the first 3 letters of the month name with
//   the first letter capitalized.
// - If a string is passed in which does not conform to any of the rules above, then
//   you should simply return a Date object for the current time.

// Example input, assuming the current Date is Thursday December 17, 2015:
// parseDates('Jan 12th 1:09 AM')  => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
// parseDates('Today 8:15 PM')     => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
// parseDates('Sunday 12:59 PM')   => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'

// parseDates('Jan 1st')
// parseDates('hello')
// parseDates('Today 2 PM')        => invalid formats, so all return Date object for today at the current time: 'Thu Dec 17 2015 11:31:00 GMT-0800 (PST)'

// FAQ:
// - seconds / milliseconds of the returned Date object do not matter
// - you can assume the provided day of month will be valid if it's a month string
//   (i.e. the function will not be called with 'Jul 84th 1:00 PM') since that's not a real date
// - if any part of the date string is missing then you can consider it an invalid date

function parseDates(str) {
  //list out Month and Day of the week
  //check the length of the string,check the date, check the format, return new Date if false
  //check whether str length is 3 or 4
  //check for the time if it's valid, and convert it to valid string
    //if failed then return the current Datetime
  //after time string has been formatted correctly, then feed the entire input to newDate()

  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const MonthMap = {
    Jan: ["Janurary", 31],
    Feb: ["Feburary", 30],
    Mar: ["March", 31],
    Apr: ["April", 30],
    May: ["May", 31],
    Jun: ["June", 30],
    Jul: ["July", 31],
    Aug: ["August", 30],
    Sep: ["September", 31],
    Oct: ["Octobor", 30],
    Nov: ["November", 31],
    Dec: ["December", 30]
  };
  const Day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const Hours = {"1":"01", "2":"02", "3":"03", "4":"04", "5":"05", "6":"06", "7":"07", "8":"08", "9":"09", "10":"10", "11":"11", "12":"12"};
  const tenMinutes = ["0", "1", "2", "3", "4", "5", "6"];
  const singMinutes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let parsedStr = str.split(" ");
  let ampm = parsedStr[-1];
  let correctedHour;
  let date = new Date();
  if (parsedStr.length < 3 || parsedStr.length > 4) return date;
  console.log("we are failing at the beginning");
    if (parsedStr.length === 3){
      let h = parsedStr[1].split(":")[0];
      let min = parsedStr[1].split(":")[1]
      let tm = min.split("")[0];
      let sm = min.split("")[1];
      if (parsedStr[0] === 'today'&& Objecst.keys(Hours).indexOf(h) > -1 && tenMintes.indexOf(tm) > -1 && singMinutes.indexOf(sm) > -1){
        date.setHours(Hours[h]);
        date.setMinutes(min)
      }
      //checking if its weekday, then format date
    }
    //formate the date based on the month input
    
      
          return date;
  }
console.log(parseDates("Jan 12th 1:09 AM"));
// var date1 = new Date('December 17, 1995 03:24:00');
// console.log("date1", new Date())

module.exports = parseDates;
