//STEP 1
let d=new Date();
  let d1=   d.getDay();
  console.log(d1)
//STEP 2
let m1=d.getMonth();
console.log(m1)
//STEP 3
let d3=new Date();
    console.log(d3)
    //console.log(d.getDate();
if(d3.getDay()=== 6||d3.getDay() === 0)
{
    console.log("This is Weekend");
}
else
{
    console.log("This is no Weekend");
}

//STEP 4
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentDate = new Date();
let currentDayIndex = currentDate.getDay(); // Get today's day index (0-6)
let yesterdayDayIndex = (currentDayIndex - 1 + 7) % 7; // Calculate yesterday's day index

let yesterdayDay = daysOfWeek[yesterdayDayIndex];

console.log("Yesterday's day of the week was:", yesterdayDay);




//STEP 5
let myDate = new Date();
let dayIndex = myDate.getDay(); // Get the day index (0-6)
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = dayNames[dayIndex]; // Get the day name from the array
let firstCharacter = dayName.charAt(0); // Get the first character

console.log(firstCharacter);