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

// 01 Jan 1970 00:00:00 GMT

function parseDates(str) {
  const oneDay = 86400000;
  const eightHours = 28800000;
  const time = str.slice(str.indexOf(':') - 2);
  const hours = time.slice(-2) === 'PM' ? Number(time.slice(0, 2)) + 12 : Number(time.slice(0, 2));
  const minutes = Number(time.slice(-5, -3))
  const today = str.includes('Today');
  if (today) {
    const dateObj = Date.now();
    dateObj.setHours(hours, minutes, 0, 0);
    return dateObj - eightHours;
  }
  const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 }
  let month;
  for (mo in months) {
    if (str.includes(mo)) month = months[mo]; 
  }
  month = month || Date.now().getMonth();
  console.log('MONTH: ', month);
  let dateDay;
  str.slice(0, str.indexOf(':') - 2).split('').forEach((l) => {
    if (!isNaN(+l)) dateDay = dateDay ? dateDay + l : l;
  });
  dateDay = dateDay || null;
  console.log('DATEDAY: ', dateDay);
  if (!dateDay) {
    let weekDay;
    const days = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
    for (day in days) {
      if (str.includes(day)) weekDay = days[day];
    }
    // no time to finish this
  }
  const dateObj = new Date();
  dateObj.setDate(dateDay);
  dateObj.setMonth(month);
  dateObj.setHours(hours, minutes);
  return dateObj;
}

console.log(parseDates('Nov 19th 1:12 PM').toISOString());

module.exports = parseDates;
