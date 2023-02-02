// Primitive data types
let word = 'JavaScript';
word[0] = 'Z';  // Primitive data types are immutable(non-modifiable). We can not to modify or change it. JS will raise error
console.log(word);

let $NumOne = 7;
    $NumTwo = 7;
console.log($NumOne == $NumTwo);

let numOne = 7,
    numTwo = 7;
console.log(numOne == numTwo.toString);  // variables are not the same as a value.Because I convert second variable into String data type

//Non-primitive data types
let values = [1, 'Rittenhouse', 3, 99];
values[3] = null; // Non-primitive data types are modifiable or mutable. So we can modify or change the value of non-primitive data types after it gets created
console.log(values);

let nums = [1, 2, 3];
    numbers = [1, 2, 3]; //Array
console.log(nums == numbers); // Even if two non-primitive data types have the same properties and values, they are not strictly equal.

let customerOne = {     // These are objects
    userName: 'Zaur',
    lastName: 'Suleymanov',  
    country: 'Germany'
}

let customerTwo = {
    userName: 'Zaur',
    lastName: 'Suleymanov',
    country: 'Germany'
}

customerTwo.country = 'Switzerland';
console.log(customerTwo);
console.log(customerOne == customerTwo); // Do not compare arrays, functions, or objects.Because Non-primitive data types are being compared by reference instead of value

console.log(Math.PI);

let x = 4.78;
    y = 6.34;
z = x + y;
console.log('Answer:', z, 'Rounded:', Math.round(z));

const ranNum = Math.floor(Math.random() * 21) // Creates random number between 0 to 0.999999
console.log(ranNum)


let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

let userName = 'Zaur'
    lastName = 'Suleymanov'
    age = 22;
    fullname = `Hello, my name is ${userName} ${lastName} and I am ${age}`  // `String literal text ${expression}`
console.log(fullname);

const paragraph = 'Hello\nMy name is Zaur\nI am 22'
console.log(paragraph);

let lastname = ['s', 'u', 'l', 'e', 'y', 'm', 'a', 'n', 'o', 'v']
    lastIndex = lastname.length - 1
console.log(lastname[lastIndex])

let socialMedia = 'YouTube'
convertToUpperCase = socialMedia.toUpperCase()
console.log(convertToUpperCase);

let profession = 'FrontEndDeveloper'
console.log(profession.substring(5, 17))

let username = 'Zaur Suleymanov'
console.log(username.split(''));
console.log(username.split(' '));  // Last two consoles raise different output.

let country = 'New Zealand'
makeReverse = country.split('').reverse().join('')  // Make word reverse
console.log(makeReverse)
console.log(country.includes('land'))

let sentence = "Hi, Zaur. What's up.\nWhat do you do in your leisure time, Zaur?"
console.log(sentence.replaceAll('Zaur', 'Eshref'))

let string = 'Zaur will have much money in 2 years'
console.log(string.indexOf('have'))
console.log(string.indexOf('2'))
console.log(string.split(' ').reverse())
console.log(string.split('').reverse().join(''))
console.log(string.includes('money'))

let stringTwo = 'Zaur Will have much Money in 2 years.Becase Zaur love money very much'
console.log(stringTwo.lastIndexOf('much')); //65
console.log(stringTwo.startsWith('Zaur')) //True
console.log(stringTwo.startsWith('much')) //False
console.log(stringTwo.startsWith('Zau')) //True

console.log(stringTwo.endsWith('much')) //True
console.log(stringTwo.search('Will')) // 5
console.log(stringTwo.search('will')) // -1
console.log(stringTwo.search(/will/gi)) // 5

let stringThree = 'I love JavaScript. If you do not love JavaScript what else can you Love.'
console.log(stringThree.match('love'))
console.log(stringThree.match(/love/g))
console.log(stringThree.match(/love/gi))

let text = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
console.log(text.match(regEx))
console.log(text.match(/\d+/g))

let num = '17'
    numInt = parseInt(num)
console.log(typeof numInt) // I can convert string number to a number with using 'parseInt()' method.
console.log(typeof +num) // I can also convert with adding '+' sign at the beginning of string





// -----------------------------------------------------------------------------------------------------------------
// Exercise: Level 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()

let challenge = '30 Days Of JavaScript'
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLocaleLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(2))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(2,0))

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))

// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(' '))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let txt = 'You cannot end a sentence with because because because is a conjunction'
console.log(txt.indexOf('because'))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(txt.lastIndexOf('because'))

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(txt.search('because'))

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script'))

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))





// -----------------------------------------------------------------------------------------------------------------
//Exercise: Level 2

//Using console.log() print out the following statement:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = '10'
convertToNumInt = parseInt(ten)
console.log(typeof convertToNumInt)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let Float = '9.8'
    convertToNum = Number(Float)
console.log(Math.ceil(convertToNum))

//Check if 'on' is found in both python and jargon
let String = 'Python, Jargon'
console.log(String.match(/o/g));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let Txt = 'I hope this course is not full of jargon. Check if jargon is in the sentence.'
console.log(Txt.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
let createNumOne = Math.random()
    numBtnZeroAndHundred = parseInt(createNumOne * 101)
console.log(numBtnZeroAndHundred)

// Generate a random number between 50 and 100 inclusively.
let createNumTwo = Math.floor(Math.random() * (100 - 50 +1) + 50)
console.log(createNumTwo)

//Generate a random number between 0 and 255 inclusively.
let createNumThree = Math.random()
    numBtnZeroAndTwoHundredAndFifty  = parseInt(createNumThree * 251)
console.log(numBtnZeroAndTwoHundredAndFifty)

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
lineOne = txt.substring(31,0)
lineTwo = txt.substring(55) 
connectSent = `${lineOne}${lineTwo}`
console.log(connectSent)




// -----------------------------------------------------------------------------------------------------------------
//Exercises: Level 3

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let LoveText =  'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(LoveText.match(/love/gi))

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(txt.match(/because/g))

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let messText = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
clean = messText.replace(/[% @ $ # &]/g, "");
console.log(clean.split(' '))


  