// -------------------------------------- 30 Days Of JavaScript: Higher Order Function ---------------------------------------

// function callback(n) {
//   return n**2
// }

const callback2 = n => n**2  // arrow function

function cube(callback2, n) {
  return callback2(n) * n
}

console.log(cube(callback2, 3));


const func1 = a => {
  const func2 = b => {
    const func3 = c => {
      return a + b +c
    }

    return func3
  }

  return func2
}

console.log(func1(30)(15)(20));

// -------------------------------------

const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

// -------------------------------------

const numbers = [3, 7, 10, 5, 2, 4]
let total = 0

numbers.forEach(n => total += n)
console.log(total);

// -------------------------------------

const numbers2 = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0

  const callback = function(element) {
    sum += element
  }

  arr.forEach(callback)

  return sum

}
console.log(sumArray(numbers2))

// -------------------------------------

function sayMyName(name) {

  name = 'Zaur'
  console.log(`Hello ${name}`);
}

// const interval = setInterval(sayMyName, 1000);

// setTimeout(sayMyName, 6000)

// const timeout = setTimeout(() => {
//   clearInterval(interval)

//   console.log('Interval procedure was ended');
// }, 6000)

// setTimeout(() => {
//   clearTimeout(timeout)

//   console.log('Timeout procedure was ended, Interval will continue');
// }, 4000)


// --------------------------------- forEach ---------------------------------

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr)
// })

const numbers3 = [2, 5, 3, 7, 9, 10]
let sum = 0
numbers3.forEach(element => sum += element)
console.log(sum);

// -------------------------------------

numbers3.forEach((num, i) => {
  numbers3[i] = num * 2
})
console.log(numbers3);

// -------------------------------------

const countries = ['Poland', 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((e) => console.log(e.toUpperCase()))



// --------------------------------- Map ---------------------------------

// const modifiedArray = arr.map(function (element, index, arr) {
//   return element
// })

const numbers4 = [1, 2, 3, 4, 5]
const newNumber1 = numbers4.map((e) => e * 3)

console.log(newNumber1);

const person2 =[
  {
    name: 'Zaur',
    surname: 'Suleymanov',
    age: 22
  },
  {
    name: 'Elchin',
    surname: 'Mirzayev',
    age: 21
  },
  {
    name: 'Osman',
    surname: 'Osmanov',
    age: 26
  },
  {
    name: 'Eshref',
    surname: 'Amirov',
    age: 25
  }
]

const date = new Date()
const resultPerson = person2.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`,
    yearOfBirth: date.getFullYear() - user.age
  }
})

console.log(resultPerson);

// -------------------------------------

const person = [
  {
    name: 'Zaur',
    id: 2,
    age: 22,
    gender: 1
  },

  {
    name: 'Osman',
    id: 1,
    age: 21,
    gender: 1
  },

  {
    name: 'Esref',
    id: 4,
    age: 25,
    gender: 1
  },

  {
    name: 'Aylin',
    id: 3,
    age: 29,
    gender: 2
  }
]

let newPerson = person.map(user => {

  if (user.id == 1) {
    user.name = 'Nazar'
  }

  return user
})

console.log(newPerson);

// -------------------------------------

const countries2 = [
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
  'Kenya',
]

const countriesToUpperCase = countries2.map((e) => e.toUpperCase())
console.log(countriesToUpperCase);

// Arrow function
const countriesToUpperCase2 = countries2.map((e) => {
  return e.toUpperCase()
})

console.log(countriesToUpperCase2);


// --------------------------------- Filter ---------------------------------

// const countriesContainingLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesContainingLand)

// const women = person.filter(user => {
//   if (user.gender === 2) {
//     console.log(user);
//   }
// })

const women = person.filter(user => user.gender === 2)
const men = person.filter(user => user.gender === 1 && user.age > 21)
console.log(women);
console.log(men);

const numbers7 = [4, 11, 5, 8, 88, 100, 41]
const result3 = numbers7.filter((number) => number > 10)
console.log(result3);

const users = [
  {
    name: 'Mehmet',
    age: 24
  },
  {
    name: 'Cem',
    age: 28
  },
  {
    name: 'Ali',
    age: 27
  },
  {
    name: 'Eshref',
    age: 24
  },
  {
    name: 'Zaur',
    age: 27
  },
  {
    name: 'Nese',
    age: 35
  }
]

const resultName = users.filter((user) => user.name.length <= 4)
const resultAge = users.filter((user) => user.age === 27)
console.log(resultName);
console.log(resultAge);

const names4 = ['Zaur', 'Elchin', 'Ali', 'Ece', 'Cem', 'Elmar']
const search = (key, arr) => arr.filter((item) => item.toLowerCase().includes(key.toLowerCase()))
// function search(key, arr) {
//   return arr.filter((item) => item.toLowerCase().includes(key.toLowerCase()))
// }
console.log(search('ce', names4));

// --------------------------------- Reduce ---------------------------------

const numbers5 = [3, 1, 5, 7, 9, 10]
let sum2 = numbers5.reduce((acc, cur) => acc + cur, 0)

console.log(sum2);

// -------------------------------------

const numbers6 = [15.5, 2.3, 1.1, 4.7];
let sum3 = numbers6.reduce(totalFunc, 0)

function totalFunc(acc, cur) {
  return acc + Math.round(cur)
}
console.log(sum3);


// --------------------------------- Every ---------------------------------

const result = person.every(user => user.gender === 1)
console.log(result);

// -------------------------------------

const names = ['Zaur', 'Elchin', 'Esref', 'Osman', 'Nazar']
const areAllStr = names.every((element) => typeof element === 'string')
console.log(areAllStr);

// --------------------------------- Some ---------------------------------

const num1 = [5, 10, 17, 22, 18, 28, 3]
const result2 = num1.some(e => e > 18)
console.log(result2);

// --------------------------------- Find ---------------------------------

const ages = [24, 22, 19, 32, 35, 18]
const currentAge = ages.find((e) => e < 20)
console.log(currentAge);

const names2 = ['Zaur', 'Mathias', 'Elias', 'Alice', 'Sebastian', 'Brook']
const currentName = names2.find((name) => name.length > 7)
console.log(currentName);

const scores = [
  {
    name: 'Zaur',
    score: 98
  },
  {
    name: 'Elchin',
    score: 91
  },
  {
    name: 'Osman',
    score: 85
  },
  {
    name: 'Sebastian',
    score: 100
  }
]

const currentScore = scores.find((user) => user.score > 90)
console.log(currentScore);

// --------------------------------- FindIndex ---------------------------------

const currentIndex = ages.findIndex((e) => e < 20)
console.log(currentIndex);

// --------------------------------- Sort ---------------------------------

console.log(names2.sort());

const num2 = [5, 10, 17, 22, 100, 287, 18, 28, 3]
num2.sort((a, b) => a - b)
// num2.sort((a, b) => b - a)

// num2.sort(function(a, b) {
//   return a - b
// })
console.log(num2);

person.sort((a, b) => a.id - b.id)
console.log(person);

const names3 = ['Zaur', 'Mathias', 'Elias', 'Alice', 'Sebastian', 'Brook']
names3.sort((a, b) => a.localeCompare(b))
console.log(names3);




// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

const countries3 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countries4 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names5 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Use forEach to console.log each country in the countries array.
countries3.forEach((country) => {
  console.log(country);
})
console.log('----------------------');

//Use forEach to console.log each name in the names array. 
names5.forEach(name => {
  console.log(name);
})
console.log('----------------------');

//Use forEach to console.log each number in the numbers array.
numbers8.forEach(number => {
  console.log(number);
})

//Use map to create a new array by changing each country to uppercase in the countries array. 
const countryToUpperCase1 = countries3.map(country => country.toUpperCase())
console.log(countryToUpperCase1);

//Use map to create an array of countries length from countries array.
const countryLength = countries3.map(country => country.length)
console.log(countryLength);

//Use map to create a new array by changing each number to square in the numbers array
const numsquare1 = numbers8.map(num => Math.pow(num, 2))
console.log(numsquare1);

//Use map to change to each name to uppercase in the names array
const nameToUpperCase1 = names5.map((name) => name.toUpperCase())
console.log(nameToUpperCase1);

//Use map to map the products array to its corresponding prices.
const priceOfProduct1 = products.map(item => {
  return {
    productPrice: `The price of ${item.product} is ${item.price}`
  }
})
console.log(priceOfProduct1);

//Use filter to filter out countries containing land.
// const countryIncludeLand1 = countries3.filter((country) => console.log(country.includes('land')))
const searchContainFunction = (key, arr) => arr.filter((item) => item.toLowerCase().includes(key.toLowerCase()))
console.log(searchContainFunction('land', countries3));

//Use filter to filter out countries having six character.
const countryLength2 = countries3.filter((country) => {
  if (country.length === 6) {
    return country
  }
})
console.log(countryLength2);

//Use filter to filter out countries containing six letters and more in the country array.
const countryLength3 = countries3.filter((country) => {
  if (country.length >= 6) {
    return country
  }
})
console.log(countryLength3);

//Use filter to filter out country start with 'E';
const searchStartWithFunction = (key, arr) => arr.filter((item) => item.toLowerCase().startsWith(key.toLowerCase()))
console.log(searchStartWithFunction('E', countries3));

//Use filter to filter out only prices with values.
const productPrice2 = products.filter((val) => console.log(val.price))

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string')
}
console.log(getStringLists(names5));

//Use reduce to sum all the numbers in the numbers array. 
const calculateTotal1 = numbers8.reduce((acc, cur) => acc + cur, 0)
console.log(calculateTotal1);

/* Use reduce to concatenate all the countries and to produce this sentence: 
Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/

// WAY 1
const countrySentence1 = countries3.reduce((country) => {
  // const formatter = new Intl.ListFormat('en', { 
  //   style: 'long', 
  //   type: 'conjunction' 
  // });
  
  // let countries = formatter.format(country)
  // let sentence = `${countries} north European countries`

  // return sentence

  let countryWithoutLastOne = countries3.splice(0, country.length -1)
  .join(', ')
  let lastCountry = countries3.splice(country.length -1)
  let statement = `${countryWithoutLastOne} and ${lastCountry}`
  let sentence =  `${statement} are north European countries`

  return sentence

})
console.log(countrySentence1);

// Use some to check if some names' length greater than seven in names array
const resultName1 = names5.some((name) => {
  if (name.length > 7) {
    return name
  }
})
console.log(resultName1);

//Use every to check if all the countries contain the word land
const searchIncludeLand = (key, arr) => arr.every(item => item.toLowerCase().includes(key.toLowerCase()))
console.log(searchIncludeLand('land', countries4));

//Use find to find the first country containing only six letters in the countries array
const countryLength4 = countries4.find((country) => country.length === 6)
console.log(countryLength4);

//Use findIndex to find the position of the first country containing only six letters in the countries array
const countryLength5 = countries4.findIndex((country) => country.length === 6)
console.log(countryLength5);

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// const resultCountryPosition = countries4.findIndex((country) => country.toLowerCase() === 'Norway'.toLowerCase())
// console.log(resultCountryPosition);

const searchCountryPosition = (key, arr) => arr.findIndex((country) => country.toLowerCase() === key.toLowerCase())
console.log(searchCountryPosition('Norway', countries4));

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(searchCountryPosition('Russia', countries4));




// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2

/* Find the total price of products by chaining two or more array 
iterators(eg. arr.map(callback).filter(callback).reduce(callback))
*/
const totalPrice1 = products
  .filter(product => typeof product.price === 'number' && product.price != 0)
  .map(product => product.price)
  .reduce((acc, cur) => acc + cur, 0)

console.log(totalPrice1);

//Find the sum of price of products using only reduce reduce(callback))
const totalPrice2 = products.reduce((acc, cur) => {
  if(typeof cur.price === 'number' && cur.price != 0) {
    return acc + cur.price
  }
  else {
    return acc
  }
}, 0)
console.log(totalPrice2);

/* Declare a function called categorizeCountries which returns an array of countries which have some common 
pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
*/
import { countries5 } from "./countries.js";

function categorizeCountries(countries) {
  const patterns = {
    land: /land$/i,
    ia: /ia$/i,
    island: /island$/i,
    stan: /stan$/i,
  };

  const result = {};
  
  for (const patternKey in patterns) {
    const pattern = patterns[patternKey];
    result[patternKey] = countries.filter((country) => pattern.test(country));
  }

  return result;
}
console.log(categorizeCountries(countries5));

/* Create a function which return an array of objects, 
which is the letter and the number of times the letter use to start with a name of a country.
*/
function countStartingLetters(countries) {
  const startingLetters = {};
  
  for (const country of countries) {
    const firstLetter = country.charAt(0);
    
    if (!startingLetters[firstLetter]) {
      startingLetters[firstLetter] = 1;
    } else {
      startingLetters[firstLetter]++;
    }
  }
  
  return Object.entries(startingLetters).map(([letter, count]) => ({ letter, count }));
}
console.log(countStartingLetters(countries5));


