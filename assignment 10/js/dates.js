//STEP 1
let currentMonth = new Date().getMonth();
function myFun(myMonth){
    const myDays = [31,28,30,31,30,31,30,31,30,31,30,31];
 return myDays[myMonth];
}
let result = myFun(currentMonth);
console.log(`There are ${result} days in this month`);


//STEP 2
let myDay=new Date('2023-08-19').getMonth();
function myMonth(day){
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[day];
}
let monthResult=myMonth(myDay);
console.log(`Month is ${monthResult}`)

//STEP 3
let d3=new Date();
    
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