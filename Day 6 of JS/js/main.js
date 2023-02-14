// -------------------------------------- 30 Days Of JavaScript: Loops ---------------------------------------

// For loop structure
// for(initialization, condition, increment/decrement){
//   // code goes here
// }

for(let i=0; i <=10; i++) {
  console.log(i);
}

for(let i=1; i<=7; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries1 = ['Poland', 'Turkey', 'Finland', 'Azerbaijan', 'Germany', 'America', 'Sweden', 'Iceland']

// Way 1
for (let i = 0; i < countries1.length; i++) {
  const element = countries1[i];
  console.log(element);
}

// Way 2
for (let i = 0; i < countries1.length; i++) {
  console.log(countries1[i]);;
}


const names1 = ['Zaur', 'Elchin', 'Nastya', 'Eshref', 'Ted', 'Thomas', 'Niccolo']
const newArr1= []
for(let i = 0; i < names1.length; i++) {
  newArr1.push(names1[i].toLocaleUpperCase('TR'));  // I make all items upperCase and push them to new array using push() method
}
console.log(newArr1); // I should write console.log() out of loop


// ----------------- Adding all elements in the array -----------------

const numbers1 = [7, 2, 5, 10, -2]
let sum = 0
for(let i = 0; i < numbers1.length; i++) {     // I can sum all numbers using Reduce() method. Reduce method is the best and easy way
  sum += numbers1[i]
}
console.log(sum);


// ----------------- Using Reduce() method -----------------

const numbers2 = [5, 8, 10, 2]
// Way 1
const newArr2 = numbers2.reduce((total, value) => {  // I sum all numbers using Reduce() method
  return total + value
})
console.log(newArr2);

// Way 2
let newArr3 = numbers2.reduce(sumNumbers)
function sumNumbers(sum, value) {
  return sum + value
}
console.log(newArr3);


// ----------------- Creating a new array based on the existing array -----------------

const countries2 = ['Poland', 'Turkey', 'Ukrania', 'Azerbaijan', 'America']
const newCountries1 = []
for(let i = 0; i < countries2.length; i++) {
  newCountries1.push(countries2[i])
}
newCountries1.sort()
console.log(newCountries1);


const numbers3 =[1, 2, 3, 4, 5, 6]
const newArr4 = []
for (let i = 0; i < numbers3.length; i++) {
  newArr4.push(numbers3[i] ** 2)               // I used push() method
}
console.log(newArr4);



// ----------------- while loop -----------------

let i = 0
while (i < names1.length) {
  console.log('Names:', names1[i].toLocaleLowerCase('TR'))
  i++
}

let a = 0
do {
  console.log('Names:', names1[a].toLocaleUpperCase('TR'));
  a++
}
while( a < names1.length)



// ----------------- for of loop -----------------

// for (const element of arr) {
//   // code goes here
// }

for(const country of countries2) {
  console.log('Name of Country:', country);
}


const numbers4 = [1, 2, 3, 4, 5, 6]
for (const num of numbers4) {
  console.log(num)
}


const webTechs1 =['HTML','CSS','JavaScript','React', 'Sass', 'Redux','Node','MongoDB']
for(const tech of webTechs1) {
  console.log(tech[0]); // get only the first letter of each element,  H C J R S N M
}


const countries3 = ['Poland', 'Turkey', 'Ukrania', 'Azerbaijan', 'America', 'Germany']
const newCountries2 = []
for (const country of countries3) {
  newCountries2.push(country.toLocaleUpperCase('TR'))
}
// newCountries2.sort()
console.log(newCountries2);

for(const country of countries3) {
  if(country === 'Azerbaijan') {
    console.log(`${country} is found`);
    break
  }
  console.log(country);
}

for(const country of countries3) {
  if(country === 'Azerbaijan') {
    console.log(`${country} is missed`);
    continue
  }
  console.log(country);
}





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let index = 0; index <= 10; index++) {
  console.log(index);;
}

let b = 0
while (b <= 10) {
  console.log(b);
  b++;
}

do {
  console.log(i);
  i++
}
while (i <= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0 ; i--) {
  console.log(i);;
}

let index = 10
while (index >= 0) {
  console.log(index);
  index--
}
console.log(index);

// Iterate 0 to n using for loop
let num = Math.abs(prompt('Enter a number:'))
for (let i = 0; i <= num; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log():
/*#
  ##
  ###
  ####
  #####
  ######
  #######
*/
let n1 = Math.abs(prompt('Enter a number:'))
for (let i = 1; i <= n1; i++) {
  let stars = ''
  for (let j = 1; j <= i; j++) {
    stars += '*'
  }
  console.log(stars);
}

// Use loop to print the following pattern:
let n2 = Math.abs(prompt('Enter a number:'))
for (let index = 0; index <= n2; index++) {
  console.log(`${index} * ${index} = ${index * index}`);
}

// Using loop print the following pattern
let n3 = Math.abs(prompt('Enter a number:'))
for (let index = 0; index <= n3; index++) {
  console.log(`i -> ${index} | i^2 -> ${Math.pow(index, 2)} | i^3 -> ${Math.pow(index, 3)}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
  let isPrime = true

   // check if the number is prime
  for (let j = 2; j < i; j++) {
    if(i % j === 0) {
      isPrime = false
      break
    } 
  }
  if(isPrime) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum1 = 0
for (let i = 0; i <= 100; i++) {
  sum1 += i
}
console.log('The sum of all numbers from 0 to 100 is',sum1);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0
let sumOdd = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i
  }
  else{
    sumOdd += i
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}`);
console.log(`The sum of all odd from 0 to 100 is ${sumOdd}`);
const sumArr = [sumEven, sumOdd]
console.log(sumArr);

// Develop a small script which generate array of 5 random numbers
const numbers5 = []
for (let i = 0; i < 5; i++) {
  const randomNum = Math.floor(Math.random() * 20) + 1;   // It generates random numbers between 20 and 1 with five items array
  numbers5.push(randomNum)
}
console.log(numbers5);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const numbers6 = []
for (let i = 0; i < 5; i++) {
  const randomNum = Math.floor(Math.random() * 20) + 1;
  if (numbers6.indexOf(randomNum) === -1) {     // The indexOf() method returns the position of the first occurrence of a value in a string.
    numbers6.push(randomNum)
  }
}
console.log(numbers6);


const numbers7 = []
for(let i = 0; i < 5; i++) {
  const randomNum = Math.floor(Math.random() * 20) + 1;
  if(!numbers7.includes(randomNum)) {     // The includes() method returns true if a string contains a specified string.
    numbers7.push(randomNum)
  }
}
console.log(numbers7);

// Develop a small script which generate a six characters random id:

// Way 1
let numCha = ''
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for(let i = 0; i < 6; i++) {
  const randomNum = characters.charAt(Math.floor(Math.random() * characters.length))
  if(numCha.indexOf(randomNum) === -1) {
    numCha += randomNum
  }
}
console.log(numCha);

// Way 2
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomId += chars[randomIndex];
}

console.log(randomId);





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2

// Develop a small script which generate any number of characters random id:
function generateRandomID(numChars) {
  let id = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < numChars; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars.charAt(randomIndex);
  }

  return id;
}
// Generate a random ID with 10 characters
const randomID = generateRandomID(10);
console.log(randomID);


// Write a script which generates a random hexadecimal number
const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log(randomHex);


// Write a script which generates a random rgb color number.
// Way 1
const randomColorR = Math.floor(Math.random() * 256)
const randomColorG = Math.floor(Math.random() * 256)
const randomColorB = Math.floor(Math.random() * 256)
console.log(`rgb(${randomColorR},${randomColorG},${randomColorB})`);

// Way 2
const randomColor1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
console.log(randomColor1);

// Way 3
let randomColor2 = 'rgb('
for (let i = 0; i < 3; i++) {
  const randomValue = Math.floor(Math.random() * 256)
  randomColor2 += `${randomValue}`
  
  if(i < 2) {
    randomColor2 += ', '
  }
}
randomColor2 += ')'
console.log(randomColor2);

// Using the below countries array, create the following new array.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const newCountries3 = []
for(const country of countries) {
  newCountries3.push(country.toLocaleUpperCase('TR'))
}
console.log(newCountries3);

// Using the above countries array, create an array for countries length'.
const lenghtsOfCountry = []
for (const country of countries) {
  lenghtsOfCountry.push(country.length)
}
console.log(lenghtsOfCountry);

// Use the countries array to create the following array of arrays:
// Way 1
let arrayOfArrays1 = []
for (let index = 0; index < countries.length; index++) {
  arrayOfArrays1.push([countries[index], (countries[index].substring(0, 3)).toUpperCase(), countries[index].length])
}
console.log(arrayOfArrays1);

// Way 2
let arrayOfArrays2 = []
for (let index = 0; index < countries.length; index++) {
  const countryArray = [countries[index], (countries[index].substring(0, 3)).toUpperCase(), countries[index].length]
  arrayOfArrays2.push(countryArray)
}
console.log(arrayOfArrays2);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// Way 1
const withLand = []
const withoutLand = []
for (const country of countries) {
  if (!country.endsWith('land')) {
    withoutLand.push(country)
  }
  else {
    withLand.push(country)
  }
}
console.log(`Just these two countries with land`, withLand);
console.log(`All these countries without land`, withoutLand);

// Way 2
let endWithLand = countries.filter(value => {   // And also I can make above process using filter
  return value.endsWith('land')
})
console.log(endWithLand);

// Way 3
let endWithLand2 = countries.filter(landNames)
function landNames(e) {
  return e.endsWith('land')
}
console.log(endWithLand2);


// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const withIa = []
const withoutIa = []
for (const country of countries) {
  if (country.endsWith('ia')) {
    withIa.push(country)
  }
  else {
    withoutIa.push(country)
  }
}
console.log('These are countries ends with ia', withIa);
console.log('These are countries ends without ia', withoutIa);

// Using the above countries array, find the country containing the biggest number of characters.

// Way 1
let largest = countries[0]
for (let i = 0; i < countries.length; i++) {

  if(countries[i].length > largest.length) {
    largest = countries[i]
  }
}

console.log(largest);


// Way 2
function findLongestString(array) {                        // With Function 
  let longestString = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
}

const longestCountry = findLongestString(countries);
console.log(longestCountry);

// Using the above countries array, find the country containing only 5 characters.
const fiveChar = []
for (const country of countries) {
  if (country.length === 5) {
    fiveChar.push(country)
  }
}
console.log(fiveChar);


// Find the longest word in the webTechs array
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let largest2 = webTechs[0]
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > largest2.length) {
    largest2 = webTechs[i]
  }
}
console.log(largest2);

// I callback above function
const longestWebTech = findLongestString(webTechs);    // I callback above function
console.log(longestWebTech);

// Use the webTechs array to create the following array of arrays:
const newArr5 = []
for (const techs of webTechs) {
  newArr5.push([techs, techs.length])
}
console.log(newArr5);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
const mern = []
for (const techs of mernStack) {
  mern.push(techs[0])
}
console.log(mern.join(''));  // I use join() method to convert string

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const techs of webTechs) {
  console.log(techs);
}


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']
const reversedFruits = []
for (let i = fruits.length; i >= 0; i--) {
  reversedFruits.push(fruits[i])
}
console.log(reversedFruits);


// Print all the elements of array as shown below.

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 3

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countries8 = [
  'Germany',
  'Ethiopia',
  'Denmark',
  'Kenya',
  'Bolivia',
  'Finland',
  'Ireland',
  'Albania',
  'Japan',
  'Hungary',
  'Canada',
]

const newArr6 = countries8.slice().sort()
console.log(countries8);
console.log(newArr6);

// Sort the webTechs array and mernStack array
const webTechs2 = [
  'React',
  'Redux',
  'Node',
  'CSS',
  'MongoDB',
  'JavaScript',
  'HTML',
]

const mernStack2 = ['Node', 'React', 'MongoDB', 'Express']

const sortedTechs = webTechs2.sort()
const sortedMern = mernStack2.sort()
console.log(sortedTechs);
console.log(sortedMern);


// Extract all the countries contain the word 'land' from the countries array and print it as array
import { countries6 } from "./countries.js";

const endWithLand1 = []
for (const country of countries6) {
  if (country.endsWith('land')) {
    endWithLand1.push(country)
  }
}
console.log(endWithLand1);

// Find the country containing the hightest number of characters in the countries array

// Way 1
let biggestCharacter1 = countries6[0]
for (let i = 0; i < countries6.length; i++) {
  if (countries6[i].length > biggestCharacter1.length) {
    biggestCharacter1 = countries6[i]
  }
}
console.log(biggestCharacter1);

// Way 2
// I callback above function
const longestCountry6 = findLongestString(countries6);
console.log(longestCountry6);

// Extract all the countries containing only four characters from the countries array and print it as array
const fourCharacter = []
for (let i = 0; i < countries6.length; i++) {
  if (countries6[i].length === 4) {
    fourCharacter.push(countries6[i])
  }
}
console.log(fourCharacter);


// Reverse the countries array and capitalize each country and stored it as an array

// Way 1
const reversedCountry = []
for (let i = countries6.length; i >= 0; i--) {
  reversedCountry.push(countries6[i]) 
}
let arrToString = (reversedCountry.join(', ')).toLocaleUpperCase('TR')
let stringToArr = arrToString.split(', ')
console.log(stringToArr);
