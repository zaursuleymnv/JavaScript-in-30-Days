// -------------------------------------- 30 Days Of JavaScript: Conditionals ---------------------------------------


let numOne = parseInt(prompt('Enter a number:'))
if (numOne > 0) {                                    // If condition is true the first block will be executed, if not the else condition will be executed.
    console.log(` ${numOne} is a positive number`, typeof numOne);
}


let isSnowing = false
if(isSnowing) {
    console.log('Be careful while driving!');
}
else {
    console.log("Don't worry, the weather is sunny.");    // In order to see the result of a falsy condition, we should have another block, which is going to be else.
}

let numTwo = prompt('Enter a number please:')
if(numTwo > 0) {
    console.log(`${numTwo} is a positive number`);
}
else {
    console.log(`${numTwo} is a negative number`);
}



// ------------- What if we have more than two conditions? In that case, we would use else if conditions. ----------

let ResultOne = prompt('Enter a number:')
if(ResultOne > 0) {
    console.log(`${ResultOne} is a positive number`);
}
else if(ResultOne < 0) {                                 // We use else if when we have multiple conditions.
    console.log(`${ResultOne} is a negative number`);
}
else if(ResultOne == 0) {
    console.log(`${ResultOne} is a zero`);
}
else {
    console.log(`${ResultOne} is not a number`);
}


// if else if else

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}




// --------------------------------------------- Switch --------------------------------------------------------


// Example 1
let weatherInput = prompt('What is the weather like today ?')
let weatherCase = weatherInput.toLowerCase()

switch (weatherCase) {
    case 'rainy':
        console.log('You need a rain coat.')
        break

    case 'cloudy':
        console.log('It might be cold, so you need a jacket.')
        break

    case 'sunny':
        console.log('Go out freely.')
        break

    default:
        console.log('Please, input correct weather name!')
        break
}



// Example 2
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday');
        break
    case 'tuesday':
        console.log('Today is Tuesday');
        break
    case 'wednesday':
        console.log('Today is Wednesday');
        break
    case 'thursday':
        console.log('Today is Thursday');
        break
    case 'friday':
        console.log('Today is Friday');
        break
    case 'saturday':
        console.log('Today is Saturday');
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day. Please, input right name.')
}


// Example 3
let resultTwo = prompt('Enter a number:');
switch (true) {
  case resultTwo > 0:
    console.log(`${resultTwo} is a positive number`)
    break

  case resultTwo == 0:
    console.log(`${resultTwo} is a zero`)
    break

  case resultTwo < 0:
    console.log(`${resultTwo} is a negative number`)
    break

  default:
    console.log(`Entered value '(${resultTwo})' is not a number`);
}




// --------------------------------------------- Ternary Operators --------------------------------------------------------

let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')








// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let ageUserInput = prompt('Enter your age:')
let moment = new Date()
let calculateYear = 18 - ageUserInput

if(ageUserInput >= 18) {
  console.log('You are old enough to drive');
}
else {
  console.log(`You are left with ${calculateYear} years to drive.`);
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 22
let yourAge = prompt('Enter your age:')
let calculateAge = myAge - yourAge

if(myAge > yourAge) {
  console.log(`I am ${calculateAge} years older than you`);
}
else {
  console.log(`You are ${Math.abs(calculateAge)} years older than me`);
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = parseInt(prompt('Input a number:'))
let b = parseInt(prompt('Input b number:'))

if(a > b) {
  console.log('a is greater than b');
}
else if (a === b) {
  console.log('a is equal b');
}
else if (a < b) {
  console.log('a is less than b');
}
else {
  console.log('The types of a and b are should be number!');
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let numberInput = prompt('Enter a number:')
if (numberInput % 2 == 0) {
  console.log(`${numberInput} is an even number`)
}
else {
  console.log(`${numberInput} is an odd number`)
}





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2 

/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F 
*/

let gradeStudentInput = parseInt(prompt('Enter your grade:'))
switch (true) {      // We should write 'true' in switch parenthesis.
  case (gradeStudentInput >= 91 && gradeStudentInput <=100) :
    console.log('91-100, A');
    break;

  case (gradeStudentInput >= 81 && gradeStudentInput <=90) :
    console.log('81-90, B');
    break;

  case (gradeStudentInput >= 71 && gradeStudentInput <=80) :
    console.log('71-80, C');
    break;

  case (gradeStudentInput >= 61 && gradeStudentInput <=70) :
    console.log('61-70, D');
    break;

  case (gradeStudentInput >= 51 && gradeStudentInput <=60) :
    console.log('51-60, E');
    break;
  case (gradeStudentInput > 100 ) :
    console.log('Input correct grade. You can enter till 100!');
    break;

  default:
    console.log('Sorry, you are failed.');
    break;
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

let seasonUserInput = prompt('Please, input name of a month:', 'Like: July')
let season = seasonUserInput.toLowerCase()
switch (season) {
  case ('september'):
  case ('october'):
  case ('november'):
    console.log('The season is Autumn.');
    break;
  case ('december'):
  case ('january'):
  case ('february'):
    console.log('The season is Winter.');
    break;
  case ('march'):
  case ('april'):
  case ('may'):
    console.log('The season is Spring.');
    break;
  case ('june'):
  case ('july'):
  case ('august'):
    console.log('The season is Summer.');
    break;

  default:
    console.log('Input correct season name!');
    break;
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let weekendUserInput = prompt('What is the day  today ?','For example: Monday')
let weekend = weekendUserInput.toLowerCase()
switch (weekend) {
  case 'monday':
    console.log('Monday is a working day.');
    break;

  case 'monday':
    console.log('Monday is a working day.');
    break;

  case 'tuesday':
    console.log('Tuesday is a working day.');
    break;

  case 'wednesday':
    console.log('Wednesday is a working day.');
    break;

  case 'thursday':
    console.log('Thursday is a working day.');
    break;

  case 'friday':
    console.log('Friday is a working day.');
    break;

  case 'saturday':
    console.log('Saturday is a weekend.');
    break;

  case 'sunday':
    console.log('Sunday is a weekend.');
    break;
  
  default:
    console.log('Input correct day name!!');
    break;
}

// Write a program which tells the number of days in a month.

let monthUserInput = prompt('Enter a month:')
let yearUserInput = prompt('Enter a year:')
let month = monthUserInput.toLowerCase()
let year
if(month == 'january' || month == 'march' || month == 'may' || month == 'july' 
  || month == 'august' || month == 'october' || month == 'december') {

    console.log(`${month} has 31 days.`);
}
else if((month == 'february') && ((year%400==0) || (year%4==0 && year%100!=0))) {
  console.log(`${month} has 29 days.`);
}
else if(month == 'february') {
  console.log(`${month} has 28 days.`);
}
else {
  console.log(`${month} has 30 days.`);
}
