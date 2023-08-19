//STEP 1
let num1=prompt('Please Enter number');
if (num1 < 0) {
    console.log(`Entered number:  ${num1} you did this one wrong.
    `);
} else {
    console.log(`Entered number: + ${num1} `);
 }
//STEP 2
let num2=prompt("plz enter floaing number")
let num21 = Math.round(num2)
console.log(num21)

//STEP 3
let num3=prompt("plz enter floaing number")

let num32= Math.floor(num3)
console.log(num32);

//STEP 4
let num4=prompt('enetr 5 number seperated by comma ');
let arr=num4.split(',').map(Number);
let  maxNum=Math.max(...arr);
console.log(maxNum);

//STEP 5
let num5=prompt('Please Enter number');
let num51=Math.sqrt(num5);
console.log(num51)