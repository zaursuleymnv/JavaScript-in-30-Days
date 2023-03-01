// -------------------------------------- 30 Days Of JavaScript: Functions ---------------------------------------

// Global scope
let msg = 'Hello JavaScript'

function HelloWorld() {
  // Local scope
  let msg = 'Hello World'

  return msg
}

let hello = HelloWorld()
console.log(hello);

function multiply(num1, num2) {
  return num1 * num2
}
let total = multiply(7, 5)
console.log(total);


function square(number) {
  return number * number
}
console.log(square(7));

function fullName(name, surname) {
  return `${name} ${surname}`
}
let nameSurname = fullName('Zaur', 'Suleymanov')
console.log(nameSurname);


function totalArrayValues(array) {

  let total = 0

  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }

  return total
} 

let numbers = [7, 5, 14, -6, 10, 10, 20]
console.log(totalArrayValues(numbers));

// unlimited number of parameters
function sumAllNumbers() {
  console.log(arguments);   // we should write argument
}
sumAllNumbers(3, 6, 7, 8, 10, 5)

// unlimited number of parameters
function totalAllNumbers() {
  let sum = 0

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum
}

console.log(totalAllNumbers(3, 6, 7, 8, 10, 5));


const circleOfArrays = (radius) => {
  let area = Math.round(Math.PI * radius * radius)
  return area
}
console.log(circleOfArrays(9));

// Anonymous Function or Expression Function
const sayHello = function(name) {  // Expression functions are anonymous functions. We assign it to a variable. To return a value from the function we should call the variable
  return `Hello ${name}`
}

console.log(sayHello('Zaur'));

// Self Invoking Functions. Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(n) {
  console.log(n * n)
})(2)


;(function(name) {

  console.log(`My name is ${name}`);

})('Zaur')


let squaredNum = (function(num) {

  return num * num

})(10)
console.log(squaredNum);


function reversedArray(array) {

  const reversedArr = []

  for (let i = array.length; i >= 0; i--) {
    reversedArr.push(array[i])
  }

  return reversedArr
}

const names = ['Zaur', 'Aylin', 'Eshref', 'Osman', 'Hasan', 'Elchin', 'Tayfun']
console.log(reversedArray(names));

// Arrow Function. Arrow function uses arrow instead of the keyword function to declare a function. 
const reversedArray2 = array => {
  const reversedArr2 = []

  for (let i = array.length; i >= 0; i--) {
    reversedArr2.push(array[i])
  }

  return reversedArr2 
}
console.log(reversedArray2(names));


const sayMyName = (name) => {

  return `My name is ${name}`
}
console.log(sayMyName('Zaur'));

// I can write the same process in two different ways
const sayMyname2 = name => `My name is ${name}`
console.log(sayMyname2('Eshref'));


const numbers2 = (...nums) => {   // It works like arguments above

  console.log(nums);
}
numbers2(4, 6, 9, 10, 7)

// Function with default parameters
function multiply2(num1, num2 = 10) {
  return num1 + num2
}
let sum = (multiply2(89))
console.log(sum);




// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

// Declare a function fullName and it print out your full name.
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastname) {
  return `${firstName} ${lastname}`
}
console.log(fullName2('Zaur', 'Suleymanov'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(number1, number2) {
  let sum = number1 + number2
  
  return sum
}
console.log(addNumbers(33, 158));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  let area = length * width

  return area
}
let lengthforArea = parseInt(prompt('Enter a length:'))
let widthforArea = parseInt(prompt('Enter a width:'))

console.log(`The area of rectangle is`, areaOfRectangle(lengthforArea, widthforArea));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  let perimeter = 2*(length + width)

  return perimeter

}

let lengthforPerimeter = parseInt(prompt('Enter a length:'))
let widthforPerimeter = parseInt(prompt('Enter a width:'))

console.log(`The perimeter of rectangle is`, perimeterOfRectangle(lengthforPerimeter, widthforPerimeter));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  let volue = length * width * height

  return volue
}

let lengthforVolue = parseInt(prompt('Enter a length:'))
let widthforVolue = parseInt(prompt('Enter a width:'))
let heightforVolue = parseInt(prompt('Enter a height:'))

console.log('A volume of a rectangular is', volumeOfRectPrism(lengthforVolue, widthforVolue, heightforVolue));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = radius => {
  let area = Math.PI * radius * radius

  return area
}

let radiusInputforCircle = parseInt(prompt('Enter a radius:'))

console.log(areaOfCircle(radiusInputforCircle));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = radius => {
  let circumference = 2 * Math.PI * radius

  return circumference
}

let radiusInputCircumference = parseInt(prompt('Enter a radius:'))

console.log(Math.round(circumOfCircle(radiusInputCircumference)));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityCalculate(mass, volume) {
  let density = mass / volume

  return density
}
let massUserInput = parseInt(prompt('Enter mass number:'))
let volumeUserInput = parseInt(prompt('Enter volume number:'))

console.log('Density of a substance:', Math.round(densityCalculate(massUserInput, volumeUserInput)));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedCalculate(distance, time) {
  let speed = distance / time

  return speed
}
let DistanceUserInput = parseInt(prompt('Enter a distance (km):'))
let timeUserInput = parseInt(prompt('Enter a time (hour):'))

console.log('The calculated Speed(km / hr) is', speedCalculate(DistanceUserInput, timeUserInput));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightCalculate(mass, gravity) {
  const weight = mass * gravity

  return weight
}

let massUserInput2 = parseInt(prompt('Enter a mass:'))
let gravityUserInput = parseInt(prompt('Enter a gravity:'))

console.log('Weight:', weightCalculate(massUserInput2, gravityUserInput));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32

  return fahrenheit
}
let celsiusUserInput = parseInt(prompt('Enter celsius (oC):'))
console.log('celsius (oC):', convertCelsiusToFahrenheit(celsiusUserInput));

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. 
BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below.
*/
function BMIcalculate(weight, height) {
  let bmi = weight / (height * height)

  if (bmi < 18.5) {
    return console.log('Underweight: BMI is less than 18.5', bmi);
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    return console.log('Normal weight: BMI is 18.5 to 24.9', bmi);
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    return console.log('Overweight: BMI is 25 to 29.9', bmi);
  }
  else {
    return console.log('Obese: BMI is 30 or more', bmi);
  }
}

let weightUserInput2 = prompt('Enter a weight in kg:')
let heightUserInput2 = prompt('Enter a height in m2:')
BMIcalculate(weightUserInput2, heightUserInput2)

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function seasonCheck(month) {
  switch (true) {
    case (month == 12 || month == 1 || month == 2):
      return 'Winter'
      break;
    case (month == 3 || month == 4 || month == 5):
      return 'Spring'
      break;
    case (month == 6 || month == 7 || month == 8):
      return 'Summer'
      break;
    case (month == 9 || month == 10 || month == 11):
      return 'Autumn'
      break;
    default:
      break;
  }
}

let monthUserInput = parseInt(prompt('Enter a month as a number:'))
console.log(seasonCheck(monthUserInput));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
  find = Math.max(num1, num2, num3)

  return find
}
let firstNumberInput = parseInt(prompt('Write first number:'))
let secondNumberInput = parseInt(prompt('Write second number:'))
let thirdNumberInput = parseInt(prompt('Write third number:'))

console.log(findMax(firstNumberInput, secondNumberInput, thirdNumberInput));




// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2


// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x) {
  let y = (-a * x - c) / b

  return y
}
let pointA = parseInt(prompt('Enter point a:'))
let pointB = parseInt(prompt('Enter point b:'))
let pointC = parseInt(prompt('Enter point c:'))
let pointX= parseInt(prompt('Enter point x:'))
console.log('y:', solveLinEquation(pointA, pointB, pointC, pointX));

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function quadEquationCalculate(a, b, c) {
  let disc = b ** 2 - 4 * a *c

  if(disc < 0) {
    return 'No real roots'
  }
  else if(disc === 0) {
    let x = -b / (2 * a)
    return [x]
  }
  else {
    let x1 = (-b + Math.sqrt(disc)) / (2 * a);
    let x2 = (-b - Math.sqrt(disc)) / (2 * a);
    return [x1, x2]  // it should be array

  }
}

let pointA2 = parseInt(prompt('Enter point a:'))
let pointB2 = parseInt(prompt('Enter point b:'))
let pointC2 = parseInt(prompt('Enter point c:'))

console.log(quadEquationCalculate(pointA2, pointB2, pointC2));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[i]
  }
}

let webTechs = ['Html', 'Css', 'JavaScript', 'React', 'Angular', 'Sass']
console.log(printArray(webTechs));

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(time) {
  let currentTime = time

  return currentTime
}
console.log(showDateTime(moment().format("[Today is] MM/DD/YYYY/HH:mm")));

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let reversedArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }
  return reversedArr
}

let webTechs2 = ['Html', 'Css', 'JavaScript', 'React', 'Angular']
let reversedArr = reverseArray(webTechs2)
console.log(reversedArr);

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  let change = x
  x = y
  y = change

  return [x, y]
}

let pointX2 = parseInt(prompt('Enter x number:'))
let pointY2 = parseInt(prompt('Enter y number:'))
console.log(swapValues(pointX2, pointY2));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  let capArr = []

  for (let i = 0; i < arr.length; i++) {
    capArr.push(arr[i].toUpperCase())
  }
  return capArr
}

let webTechs3 = ['Html', 'Css', 'JavaScript', 'React', 'Angular']
let capArr = capitalizeArray(webTechs3)
console.log(capArr);

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item, arr) {
  arr.push(item)

  return arr
}
let webTechs4 = ['Html', 'Css', 'JavaScript', 'React', 'Angular']
let webTechUserInput2 = prompt('Please, enter web tech name:', 'Html')
console.log(addItem(webTechUserInput2, webTechs4));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, arr) {
  arr.splice(index, 1)

  return arr
}
let webTechs5 = ['Html', 'Css', 'JavaScript', 'React', 'Angular', 'Jquery']
let indexUserInput = prompt('Please, enter an index:', '1 or 3')
console.log(removeItem(indexUserInput, webTechs5));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(add, arr) {
  let sum = 0;

  // arr.push(add)

  arr.splice(0, 0, add)

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
let numArr1 = [2, 5, 10, -3, 4]
let addNumberToArray = parseInt(prompt('Enter a number:'))
console.log(sumOfNumbers(addNumberToArray, numArr1));

// ---------------------------------------------------- //
function sumOfNumbers2(num) {
  let sum = 0

  for (let i = 1; i <= num; i++) {
    sum += i   
  }
  return sum
}
let numberUserInput2 = parseInt(prompt('Enter a number:'))
console.log(sumOfNumbers2(numberUserInput2));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      sum += i
    }
  }
  return sum
}
let numberUserInput3 = parseInt(prompt('Enter a number:'))
console.log(sumOfOdds(numberUserInput3));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
  let sum = 0

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum += i
    }
  }
  return sum
}
let numberUserInput4 = parseInt(prompt('Enter a number:'))
console.log(sumOfEven(numberUserInput4));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
  let odds = 0
  let evens = 0

  for (let i = 0; i <= num; i++) {

    if (i % 2 == 0) {
      evens ++
    }
    if (i % 2 == 1) {
      odds ++
    }
  }
  return `There are ${evens} even numbers and ${odds} odd numbers`
}
let numberUserInput5 = parseInt(prompt('Enter a number:'))
console.log(evensAndOdds(numberUserInput5));

// Write a function which takes any number of arguments and return the sum of the arguments
function sumAllNumbers2() {
  let sum = 0

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
let resultOfSum1 = sumAllNumbers2(2, 5, 8, 1, 9, 11, -3)
console.log(resultOfSum1);

// Writ a function which generates a randomUserIp.
function randomUserIp() {
  const min = 0
  const max = 255

  const randomSegment = () => Math.floor(Math.random() * (max - min + 1)) + min;

  return `${randomSegment()}.${randomSegment()}.${randomSegment()}.${randomSegment()}`;
}

console.log(randomUserIp());

// Write a function which generates a randomMacAddress
function randomMacAddress() {
  let chars = '0123456789ABCDEF'
  let mac = ''

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      mac += chars[Math.floor(Math.random() * chars.length)]   
    }
    if(i < 5) {
      mac += ':'
    }
  } 

  return mac
}
console.log(randomMacAddress());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(num) {
  let chars = '0123456789ABCDEF'
  let hex = ''

  for (let i = 0; i < num; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)]
  }

  return hex
}

let hexUserInputNum1 = prompt('Enter a number for generating hexadecimal number:', '6')
console.log(randomHexaNumberGenerator(hexUserInputNum1));

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  let chars = '0123456789ABCDEF'
  let userId = ''

  for (let i = 0; i < 7; i++) {
    userId += chars[Math.floor(Math.random() * chars.length)]
  }

  return userId
}
console.log(userIdGenerator());





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 3

/* Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
It doesn’t take any parameter but it takes two inputs using prompt(). 
One of the input is the number of characters and the second input is the number of ids 
which are supposed to be generated. */

function userIdGenerator2(num) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let userId = ''

  for (let i = 0; i < num; i++) {
    userId += chars[Math.floor(Math.random() * chars.length)]
  }

  return userId
}
let idUserInputNum1 = prompt('Enter a number for generating user id number:', '8')
console.log(userIdGenerator2(idUserInputNum1));

// Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  let rgb = 'rgb('

  for (let i = 0; i < 3; i++) {
    rgb += Math.floor(Math.random() * 256)

    if (i < 2) {
      rgb += ','
    }
  }

  rgb += ')'

  return rgb
}
console.log(rgbColorGenerator());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
  let hexColors = []

  for (let i = 0; i < num; i++) {

    let hex = '#'

    for (let j = 0; j < 6; j++) {
      hex += Math.floor(Math.random() * 16).toString(16);   // generate a random hexadecimal color code
    }
    hexColors.push(hex) 
  }

  return hexColors
}
let userInputHexColor = prompt('Enter a number for generating hex colors:')
console.log(arrayOfHexaColors(userInputHexColor));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array
function arrayOfRgbColors(num) {
  let rgbColors = []

  for (let i = 0; i < num; i++) {

    let rgb = 'rgb('

  for (let i = 0; i < 3; i++) {
    rgb += Math.floor(Math.random() * 256)

    if (i < 2) {
      rgb += ','
    }
  }

  rgb += ')'

    rgbColors.push(rgb) 
  }

  return rgbColors
}
let userInputRgbColor = prompt('Enter a number for generating rgb colors:')
console.log(arrayOfRgbColors(userInputRgbColor));

// Write a function generateColors which can generate any number of hexa or rgb colors.

// ---------------------- Way 1 ----------------------
function generateColors(format, num) {
  let colors = []

  for (let i = 0; i < num; i++) {
    let hex = '#'

    if(format === 'hex') {
      for (let j = 0; j < 6; j++) {
        hex += Math.floor(Math.random() * 16).toString(16)
        
      }
      colors.push(hex)
    }
    else if(format === 'rgb') {

      let rgb ='rgb('

      for (let i = 0; i < 3; i++) {
        rgb += Math.floor(Math.random() * 256)
    
        if (i < 2) {
          rgb += ','
        }
      }

      rgb += ')'

      colors.push(rgb)

    }
    else {
      return "Invalid format specified."
    }
    
  }

  return colors

}
let userInputFormat = prompt('Write a color format:', 'rgb or hex')
let userInputNumber3 = prompt('Enter a number:')
console.log(generateColors(userInputFormat, userInputNumber3));


// ---------------------- Way 2 ----------------------

function generateColors2(format, num) {
  let colors = [];

  for (var i = 0; i < num; i++) {

    if (format === "hex") {
      colors.push("#" + Math.floor(Math.random() * 16777215).toString(16))
    } 
    else if (format === "rgb") {
      let r = Math.floor(Math.random() * 256)
      let g = Math.floor(Math.random() * 256)
      let b = Math.floor(Math.random() * 256)
      colors.push(`rgb(${r},${g},${b})`)
    } 
    else {
      return "Invalid format specified."
    }
  }

  return colors
}
let userInputFormat2 = prompt('Write a color format:', 'rgb or hex')
let userInputNumber4 = prompt('Enter a number:')
console.log(generateColors2(userInputFormat2, userInputNumber4));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  return arr
}
console.log(shuffleArray([1, 5]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
  if(num === 0 || num === 1) {
    return 1
  }
  else {
    return num * factorial(num - 1)
  }
}
let userInputNumberFac1 = prompt('Enter a number to calculate a factorial:')
console.log(factorial(userInputNumberFac1));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(check) {
  if (check == null) {
    return true;
  }
  if(typeof check === 'string' && check.trim().length === 0) {
    return true
  }
  if(Array.isArray(check) && check.length === 0) {
    return true
  }
  if(typeof check === 'object' && Object.keys(check).length === 0) {
    return true
  }

  return false
}
console.log(isEmpty(''));
console.log(isEmpty('Poland'));
console.log(isEmpty({}));
console.log(isEmpty([]));
console.log(isEmpty(['Html', 'JavaScript']));

// Call your function sum, it takes any number of arguments and it returns the sum.

// ---------------------- Way 1 ----------------------
const sumAllNumbers3 = (...arg) => arg.reduce((acc, num) => acc + num, 0);
console.log(sumAllNumbers3(4, 6, 7));

// ---------------------- Way 2 ----------------------
function sumAllNumbers4(...arg) {
  return arg.reduce((acc, num) => acc + num, 0)
}
console.log(sumAllNumbers4(4, 5, 6, 7));

/* Write a function called sumOfArrayItems, 
it takes an array parameter and return the sum of all the items. 
Check if all the array items are number types. 
If not give return reasonable feedback.
*/

function sumOfArrayItems(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Array contains non-number item(s)'
    }
    sum += arr[i]
  }

  return sum
}
console.log(sumOfArrayItems([5, 7, 10]));
console.log(sumOfArrayItems([9, 3, 14, -5, 8]));
console.log(sumOfArrayItems([5, 7, 'ten']));

/* Write a function called modifyArray takes array as parameter and modifies 
the fifth item of the array and return the array. 
If the array length is less than five it return 'item not found'. */

function modifyArray(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 5) {
      return 'Not Found'
    }
    return arr
  }
}

console.log(modifyArray(['Html', 'Css', 'JavaScript', 'React', 'Angular', 'Sass']));
console.log(modifyArray(['Html', 'Css', 'JavaScript', 'React', 'Angular']));
console.log(modifyArray(['Html', 'Css', 'JavaScript', 'React']));

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
  if (num < 2) {
    return `${num} is not prime`
  }
  if (num === 2 || num === 3) {
    return `${num} is prime`
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return `${num} is not prime`
  }
  for (let i = 5; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return `${num} is prime`
    }
  }

  return `${num} is prime`
}

let userInputPrime = prompt('Enter a number fo check prime number:')
console.log(isPrime(userInputPrime));

// Write a functions which checks if all items are unique in the array.
function isUniqueArray(arr) {
  const set = new Set(arr)

  return arr.length === set.size
}

console.log(isUniqueArray([5, 7, 8, 15]));
console.log(isUniqueArray([5, 7, 8, 5]));
console.log(isUniqueArray(['Html', 'Css', 'JavaScript', 'React']));
console.log(isUniqueArray(['Html', 'Css', 'JavaScript', 'React', 'Css']));

// Write a function which checks if all the items of the array are the same data type.
function sameDataType(arr) {
  if (arr.length === 0) {
    return true
  }

  const dataType = typeof arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== dataType) {
      return false
    }
  }

  return true
}
console.log(sameDataType([5, 7, 10]));
console.log(sameDataType([5, 'seven', 10]));

/* JavaScript variable name does not support special characters 
or symbols except $ or _. Write a function isValidVariable which check
if a variable is valid or invalid variable. */

function isValidVariableName(varName) {
  if (!/^[a-zA-Z_$]/.test(varName)) {     // The variable name must start with a letter, underscore, or dollar sign.
    return false
  }
  if (!/^[\w$]+$/.test(varName)) {       // The variable name can only contain letters, digits, underscores, or dollar signs. 
    return false;
  }
  if (/^(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|if|import|in|instanceof|new|null|return|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)$/.test(varName)) {
    return false;
  }

  return true
}

let variableNameUserInput = prompt('Write a variable name:')
console.log(isValidVariableName(variableNameUserInput));

/* Write a function called reverseCountries, 
it takes countries array and first it copy the array and returns 
the reverse of the original array */

import { countries } from "./countries.js";

function reverseCountries(arr) {
  const reversedCountryArr = []

  for (let i = arr.length; i >= 0; i--) {
    reversedCountryArr.push(arr[i])
  }
  return reversedCountryArr
}

console.log(reverseCountries(countries));


