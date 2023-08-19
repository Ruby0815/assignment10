//STEP 1
let name=prompt("Enter your name");
nameLength=name.length;
alert(nameLength);

//STEP 2
 name2=prompt("Enter your name");
 n2=parseInt(prompt("Enetr no"));
 if((n2<1) || (n2>name2.length)){
 alert('invalid number');
}
 else {
 alert(name2.charAt((n2-1)));
 }

//STEP 3
let firstName=prompt("Enter first name");
let lastName=prompt("Enter last name");
let result=firstName.concat(lastName);
alert(result);


//STEP 4
let text4 = 'The quick brown fox jumps over the lazy dog';
alert(text4.indexOf('fox'));

//STEP 5
let text5 ='The quick brown fox jumps over the lazy fox';
alert(text5.lastIndexOf('fox'));

//STEP 6
let text6='The quick brown fox jumped over the lazy dog';
newWord=prompt("Please enter new word");
alert(text6.replace('the lazy dog', newWord));


//STEP 7
let text7=' The quick brown fox jumps over the lazy dog”';
 let searchWord=prompt("Please enter search word");
 if(text7.search(searchWord)!== -1){
    alert('found');
 }
else
alert('notfound');

//STEP 8
let old_string='The quick brown fox jumps over the lazy dog';
let new_string=old_string.slice(31);
alert(new_string);

//STEP 9
let text9= "         THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG  ";        
text9=text9.trim()
alert(text9.toLowerCase());

//STEP 10
 let text10='the quick brown fox jumps over the lazy dog';
 alert(text10.charAt(0).toUpperCase()+text10.slice(1));
