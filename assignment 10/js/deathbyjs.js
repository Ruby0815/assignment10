//STEP 1


let str1 = 'webmaster';
let newStr;

function sort(str1) {
  let strSplit = str1.split('');
  let strSort = strSplit.sort();
  newStr = strSort.join('');
  return newStr;
}
let myStr = sort(str1);
console.log(`${str1} after sort: ${myStr}`);

//STEP 2
const str = 'the quick brown fox';

function capFirst(str) {
  const words = str.split(' ');

  let newWords = words.map(function (element) {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  return newWords.join(' ');
}

const result = capFirst(str);
console.log(`First letter(capital) of all word , ${str}: ${result}`); // Output: 'The Quick Brown Fox'


//STEP 3
let str3 = 'the quick brown fox';
let vowels;
vowels = 0;

for (let i = 0; i < str3.length; i++)
  if (str3.charAt(i) === 'a' || str3.charAt(i) === 'e' || str3.charAt(i) === 'i' || str3.charAt(i) === 'o' || str3.charAt(i) === 'u') {
    vowels++;
  }
console.log(`The no of vowels in the string: ${vowels}`);
//STEP 4


let str4 = 'abcdefg';
function randomid(str4) {
  let idResult = '';
  for (let i = 0; i < str4.length; i++) {
    let myId = Math.floor(Math.random() * str4.length);
    idResult += str4.charAt(myId);
  }

  return idResult;
}
let charid = randomid(str4)
console.log(`Random id in characater: ${charid}`);



//STEP 5
let countryName = ["Australia", "Germany", "United States of America"];
let len = [];
let i;
let maxLength;

function maxLengthaArr(countryName) {
  for (i = 0; i < countryName.length; i++) {
    len[i] = countryName[i].length;
  }
  maxLength = Math.max(...len);
  return maxLength;
}

maxLengthaArr(countryName)

//Finding the country name with the maximum length
let indexforcountry = len.indexOf(maxLength);
console.log(`Longest country name: ${countryName[indexforcountry]}`);