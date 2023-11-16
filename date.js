var myDate = new Date();

// show all iterable in date method :   new Date(year,month,day,hours,minutes,seconds,ms)

// ---------------------------------------------------------------------------------------------

// get
// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)
var getDate = new Date();
var testGet = getDate.getDay();
document.getElementById("lbl").innerHTML = testGet; // now we show day in the month

// set
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)
