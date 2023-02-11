// // -------------------------------------- 30 Days Of JavaScript: Arrays (5 Days) ---------------------------------------
// // An Array is mutable(modifiable). An Array is a non-primitive data type.


const names1 = Array()
console.log(names1);
                         
const names2 = []       // There is a difference above and below the way of creating an Array
console.log(names2);


const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
console.log('Web technologies:', webTechs);
console.log('The number of Web technologies:', webTechs.length);

const countries1 = ['Poland', 'Finland', 'Japon', 'Germany', 'America', 'Poland', 'Sweden', 'Norway', 'Iceland'] // array of countries
console.log('Countries:', countries1);
console.log('The number of countries:', countries1.length);
console.log(countries1.lastIndexOf('Poland')); // lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.


// Creating an array using split

let js = 'JavaScript'
const arr1 = js.split('')
console.log(arr1);

let companiesNames = 'Meta, SpaceX, Facebook, Microsoft, IBM, Apple, Amazon, Google'
const arr2 = companiesNames.split(',')
console.log(arr2);



//Accessing array items using index

let firstWebTech = webTechs[0]
console.log(firstWebTech);

let lastIndex = webTechs.length - 1
let lastWebTech = webTechs[lastIndex]
console.log(lastWebTech);



// Modifying array element
// An Array is mutable(modifiable). An Array is a non-primitive data type. Once an array is created, we can modify the contents of the array elements.

// //Example 1
arr2[0] = 'Tesla'
arr2[3] = 'YouTube'
console.log(arr2);

//Example 2
const countries2 = [
  'Poland',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'America'
]

console.log(countries2);

countries2[0] = 'Turkey'
let lastIndexOfCountry2 = countries2.length - 1
countries2[lastIndexOfCountry2] = 'Miami'
console.log(countries2);



// // ----------------------------------------- Methods to manipulate array --------------------------------------------

const sevenXvalues = Array(7).fill('X') // fill: Fill all the array elements with a static value
console.log(sevenXvalues);

const fiveZaurValues = Array(5).fill('Zaur')
console.log(fiveZaurValues);
console.log(fiveZaurValues.length);

let lastIndexfill = fiveZaurValues.length - 1 // I changed the last index of an array 
fiveZaurValues[lastIndexfill] = 'Elchin'
console.log(fiveZaurValues);

console.log(countries2.indexOf('Denmark')); // indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.


// let us check if a Turkey exist in the array
let index = countries2.indexOf('Turkey')
// Way 1
index === -1 ? console.log(`${countries2[0]} does not exist in the array.`) : console.log(`${countries2[0]} does exist in the array.`)

// Way 2
if(index === -1){
  console.log(`${countries2[0]} does not exist in the array.`)  
} 
else {
  console.log(`${countries2[0]} does exist in the array.`)
}

console.log(countries1.lastIndexOf('Poland'))
console.log(countries1.includes('Sweden')) // includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(countries1.includes('Korea'));
console.log(Array.isArray(countries1))

let name1 = 'Zaur'
console.log(Array.isArray(name1)); // false   // Array.isArray:To check if the data type is an array

let name2 = 'Zaur'.split('')      // I turned string to array using split() method
console.log(Array.isArray(name2)); // true

console.log(companiesNames.toString()); // toString:Converts array to string
console.log(countries1.join(' - ')); // join: It is used to join the elements of the array, The argument we passed in the join method will be joined in the array and return as a string. I doesn't work for strings

console.log(countries1);
console.log(countries1.slice(2, 6)); // slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.


console.log(countries1);
let currenCountries = countries1.splice(1, 5, 'Mexico', 'Azerbaijan', 'Greek', 'Italy') // I remove five items and replace four items. Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
console.log(countries1);

countries1.push('China') // The push() method adds a new element to an array (at the end):
console.log(countries1);

countries1.pop()  // pop: Removing item in the end.
console.log(countries1);

let LastItem1 = countries1.pop() // And also pop() returns last item
console.log(LastItem1);

let FirstItem1 = countries1.shift()
console.log(FirstItem1);

console.log(countries2);
countries2.shift()        // Remove first item
console.log(countries2);
console.log(countries2.shift());  // Returns first item

countries2.unshift('Roma') // The unshift() method adds a new element to an array (in the beginning):
console.log(countries2);


let numbers = [24, 2, 6, 14, 56, 34, 12, -6, 100, 99]
numbers.sort(issmallToBig)                               // Sort() method works very well for strings
function issmallToBig (a, b) {
  return a - b
}
console.log(numbers);
console.log(numbers.reverse()); // reverse: reverse the order of an array.




// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

// Declare an empty array
const arr3 = Array()
console.log(arr3);

const arr4 = []
console.log(arr4);

// Declare an array with more than 5 number of elements
const arr5 = [8, 17, 45, 34, -7, 10]
console.log(arr5);

// Find the length of your array
console.log(arr5.length);

// Get the first item, the middle item and the last item of the array
let FirstItem = arr5[0]
let middItem = arr5[2]
let LastIndex = arr5.length - 1
let LastItem = arr5[LastIndex]
console.log(`'${FirstItem}' is a first item.`)
console.log(`'${middItem}' is a middle item.`)
console.log(`'${LastItem}' is a last item.`)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Zaur', 22, true, undefined, null, {
  Name: 'Elchin',
  Surname: 'Mirzoyev',
  Age: 21
}]
console.log(mixedDataTypes);
console.log(Array.isArray(mixedDataTypes));

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
let firstItem2 = itCompanies[0]
let middItem2 = itCompanies[3]
let lastIndex2 = itCompanies.length - 1
let lastItem2 = itCompanies[lastIndex2]
console.log(`'${firstItem2}' is a first item`);
console.log(`'${middItem2}' is a middle item`);
console.log(`'${lastItem2}' is a last item`);

// Change each company name to uppercase one by one and print them out

// Way 1
// let convertString = itCompanies.join(', ')
// console.log(convertString);
// let upper1 = convertString.toUpperCase()
// let convertArray = upper1.split(', ')
// console.log(convertArray);

// Way 2
const upper = itCompanies.map(e => {     // I used map() function 
  return e.toUpperCase()
})
console.log(upper);

// Way 3
const uppercase = itCompanies.map(e => e.toUpperCase())    // I love this way
console.log(uppercase);


// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let tostring2 = itCompanies.join(', ')
console.log(tostring2 + ' are big IT companies');

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let companyIserInput = prompt('Enter a company name:')
// let toIndex = itCompanies.indexOf(companyIserInput.toLowerCase())
// let companyName = companyIserInput.charAt(0).toUpperCase() + companyIserInput.slice(1);
// if(toIndex === -1) {
//   console.log(`Sorry! ${companyName} is not found`);
// }
// else {
//   console.log(`${companyName} is found`);
// }

// Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = itCompanies.reduce((accumulator, company) => {
  if(company.split('o').length > 2) {
    accumulator.push(company);
  }                                                                          
  return accumulator;
}, []);
console.log(filteredCompanies);

/* Above example, the reduce() method iterates through each company in the companies 
 array and adds it to the filteredCompanies array only if the count of 'o' in the company 
name is less than or equal to one. The split() method is used to split the company name 
into an array of substrings, and the length of that array minus one gives the count of 'o' in the name.
*/


// Sort the array using sort() method
// itCompanies.sort()
console.log(itCompanies.sort());

// Reverse the array using reverse() method
itCompanies.sort().reverse()
console.log(itCompanies);

// Slice out the first 3 companies from the array
let cut1 = itCompanies.slice(0, 3)  // The slice() method returns selected elements in an array, as a new array.
console.log(cut1);

// Slice out the last 3 companies from the array
const itCompanies2 = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon']
let cut2 = itCompanies2.slice(3, 6)  // The slice() method returns selected elements in an array, as a new array.
console.log(cut2);

// Slice out the middle IT company or companies from the array
let cut3 = itCompanies2.slice(3, 4)  // The slice() method returns selected elements in an array, as a new array.
console.log(cut3);

// Remove the first IT company from the array
console.log(itCompanies);
itCompanies.shift()
console.log(itCompanies);

// Remove the middle IT company or companies from the array
itCompanies.splice(3, 1)  // The splice() method adds and/or removes array elements.
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop()  // The pop() method removes the last element of an array.
console.log(itCompanies);

// Remove all IT companies
itCompanies.splice(0)
// itCompanies.splice(0, itCompanies.length)
console.log(itCompanies);





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries4 }
from './countries.js';
countries4.unshift('Miami')
console.log(countries4);

import { webTechs3 }
from './web_techs.js'
console.log(webTechs3);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace('.', '').split(' ')
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items

// add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart.includes('Meat')) {
  console.log(shoppingCart);
}
else {
  shoppingCart.unshift('Meat')
}
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
if(shoppingCart.includes('Sugar')) {
  console.log(shoppingCart);
}
else {
  shoppingCart.push('Sugar')
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let allergicToHoneyInput = prompt('Are you allergic to honey ?', 'Yes or no')
let userInput = allergicToHoneyInput.toLowerCase()
if(userInput == 'yes'){
  shoppingCart.splice(4, 1)
  console.log(shoppingCart);
}
else {
  console.log(shoppingCart);
}

// modify Tea to 'Green Tea'
let greenTea = shoppingCart.join(', ').replace('Tea', 'Green Tea').split(', ') // Firstly, I convert an array to string using join(). Because replace() methot doesn't work for arrays.Then I convert string to an array again using split()
console.log(greenTea);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries4.includes('Ethiopia')) {
  console.log(countries4['Ethiopia'].toUpperCase());
}
else {
  countries4.splice(5, 0, 'Ethiopia')
}
console.log(countries4);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs3.includes('Sass')){
  console.log(`${webTechs3[webTechs3.length - 1]} is a CSS preprocess`);
}
else {
  webTechs3.push('Sass')
  console.log(webTechs3);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 3

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
ages.sort(smallToBig)
function smallToBig(a, b) {
  return a - b
}
console.log(ages);

let maxValue = Math.max(...ages)
let minValue = Math.min(...ages)
console.log('Maximum value:',maxValue);
console.log('Minumum value:',minValue);

// Find the average age(all items divided by number of items)

// Firstly, I have to use sort() method to sort ages in ascending order
ages.sort((a, b) => a - b)
let median
let middleIndex

// Check if the array has an odd or even number of elements
if(ages.length % 2 === 0){
  // If the array has an even number of elements, calculate the median as the average of the two middle values
  middleIndex = ages.length / 2
  median = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
  console.log(median);
}
else {
  // If the array has an odd number of elements, the median is the middle value
  middleIndex = Math.floor(ages.length / 2)
  median = ages[middleIndex] 
  console.log(median);
}


// Find the range of the ages(max minus min)
const range = maxValue - minValue
console.log(`${maxValue} - ${minValue} = `,range);

// Compare the value of (min - average) and (max - average), use abs() method

// Calculate the average
const total = ages.reduce(getTotal, 0)
function getTotal(acc, value){
  return acc + value
}
const avg = total / ages.length
console.log(total);
console.log(avg);
// Find the minimum and maximum values
let maxValue2 = Math.max(...ages)
let minValue2 = Math.min(...ages)

// Calculate the absolute differences
const diff1 = Math.abs(minValue2 - avg)
const diff2 = Math.abs(maxValue2 - avg)

// Compare the value of (min - average) and (max - average)
if(diff1 > diff2) {
  console.log(`(min - average) is greater than (max - average) by ${diff1 - diff2}`);
}
else if(diff1 < diff2) {
  console.log(`(min - average) is less than (max - average) by ${diff2 - diff1}`);
}
else {
  console.log(`(min - average) and (max - average) are equal`);
}


// 1.Slice the first ten countries from the countries array
const countries3 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

const firstTen = countries3.slice(0, 10)
console.log(firstTen);
console.log(countries3.length);

// Find the middle country(ies) in the countries array
if (countries3.length % 2 === 1) {
  // If the length is odd, there is one middle country
  const middleIndex = Math.floor(countries3.length / 2);
  const middleCountry = countries3[middleIndex];
  console.log(middleCountry);
} else {
  // If the length is even, there are two middle countries
  const middleIndex1 = countries3.length / 2 - 1;
  const middleIndex2 = countries3.length / 2;
  const middleCountry1 = countries3[middleIndex1];
  const middleCountry2 = countries3[middleIndex2];
  console.log(middleCountry1, middleCountry2);
}


// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if(countries3.length % 2 === 0) {
  const middleIndex3 = countries3.length / 2
  const firstHalf = countries3.slice(0, middleIndex3)
  const secondHalf = countries3.slice(middleIndex3)
  console.log(firstHalf)
  console.log(secondHalf)
}
else {
  const middleIndex3 = Math.ceil(countries3.length / 2);
  const firstHalf = countries3.slice(0, middleIndex3);
  const secondHalf = countries3.slice(middleIndex3);
  console.log('Firsthalf:', firstHalf);
  console.log('Secondhalf:', secondHalf);
}