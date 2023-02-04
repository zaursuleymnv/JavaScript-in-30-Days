// 30 Days Of JavaScript: Booleans, Operators, Date

let a = 6
    b = 8
    z = 4
    f = 3
additionOne = a += b
exponentialOne = z **= f
console.log(additionOne)
console.log(exponentialOne)

let value1 = '5'
    value2 = 5
console.log( value1 == value2) // true, compare only value

let string1 = '5'
    number1 = 5
console.log( string1 === number1) // false, compare both value and data type

let value3 = '5'
    value4 = '5'
console.log(value3 != value4) // false

let string2 = '5'
    number2 = 5
console.log( string2 !== number2) // true

console.log('zaur'.length == 'azer'.length) // true
console.log('Zaur'.length == 'Elchin'.length) // false
console.log('Zaur'.length != 'Elchin'.length) // true
console.log('Zaur'.length !== 'Azer'.length) // false

const check1 = 8 > 5 && 8 < 10 // true && --> AND
const check2 = 9 < 12 && 12 > 15 // false
console.log(check1)
console.log(check2)

const check3 = 8 > 5 || 8 > 10 // true || --> OR
console.log(check3)

// Post-increment
let count = 0
console.log(count++) // 0
console.log(count)  // 1


// Ternary Operators

//Example 1
let number = 88
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
number = -88

number > 0
    ? console.log( `${number} is a positive number`)
    : console.log(`${number} is a negative number`)

   
//Example 2
let isSnowing = true
isSnowing
    ? console.log('You should put on warm clothes.')
    : console.log('No need very warm clothes')
isSnowing = false

isSnowing
    ? console.log('You should put on warm clothes.')
    : console.log('No need very warm clothes')


// Window prompt() method
let text = prompt('Enter programming language')
convert = text.match(/p/gi)
console.log(convert)

//Window confirm() method
let isDelete = confirm('Are you sure to delete all documents?')
result = isDelete ? 'Documents are successfully deleted' : 'Failed out' // Ternary Operators
console.log(result)

//Creating a time object
let CurrentYear = new Date()
isBirthYear = prompt('Enter your birth year')
Age = CurrentYear.getFullYear() - isBirthYear
console.log(Age)

const newdate = new Date()
let year = newdate.getFullYear(),
    // month = newdate.getMonth()
    day = newdate.getDate(),
    hours = newdate.getHours(),
    minutes = newdate.getMinutes(),
    seconds = newdate.getSeconds(),
    milliSeconds = newdate.getMilliseconds(),
    dayOfWeek = newdate.getDay()

const nameOfMonths = [
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'Oktober',
    'December',
    'January',
    'February'
]

const nameOfWeekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

let humadReadableTime = `${day}/${nameOfMonths[11]}/${year}/${nameOfWeekdays[dayOfWeek]}/${hours}:${minutes}:${seconds}:${milliSeconds}`
console.log(humadReadableTime)



// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
let firstName = 'Ted'
lastName = 'Jeffrey'
country = 'Washington'
city = 'Seattle'
age = 31
isMarried = true
Year = new Date()
console.log(
    typeof firstName, 
    typeof lastName, 
    typeof country,
    typeof city,
    typeof age,
    typeof isMarried,
    typeof Year
)

// Check if type of '10' is equal to 10
console.log('10' == 10) // true

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)  // false
console.log(parseInt(Math.ceil('9.8')) == 10) // true


// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
let isStudying = true
trueValue = 25 > 20
isMarried = false
isYoung = true
falseValue = 25 < 20
isHungry = false
console.log(isStudying, trueValue, isMarried, isYoung, falseValue, isHungry)


/* Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
 */
console.log('1:', 4 > 3) // true
console.log('2:', 4 >= 3) // true
console.log('3:', 4 < 3) // false
console.log('4:', 4 <= 3) // false
console.log('5:', 4 == 4) // true
console.log('6:', 4 === 4) // true
console.log('7:', 4 != 4) //false
console.log('8:', 4 !== 4) //false
console.log('9:', 4 != '4') // false
console.log('10:', 4 == '4') // true
console.log('11', 4 === '4') // false

let python = 'Python'
jargon = 'Jargon'
console.log(python.length === new String(jargon.length)) // false
console.log(!(python.length === jargon.length)) // I make it false with using negation ('!')


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
/*
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python 
*/
console.log('1:', 4 > 3 && 10 < 12)
console.log('2:', 4 > 3 && 10 > 12)
console.log('3:', 4 > 3 || 10 < 12)
console.log('4:', 4 > 3 || 10 > 12)
console.log('5:', !(4 > 3))
console.log('6:', !(4 < 3))
console.log('7:', !(false))
console.log('8:', !(4 > 3 && 10 < 12))
console.log('9:', !(4 > 3 && 10 > 12))
console.log('10:', !(4 === '4'))
console.log(python.substring(4,0),jargon.substring(4,0))


// Use the Date object to do the following activities
/* 
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
console.log('What is the year today?:', new Date().getFullYear())
console.log('What is the month today as a number?:', new Date().getMonth())
console.log('What is the date today?:', new Date().getDate())
console.log('What is the day today as a number?:', new Date().getDay())
console.log('What is the minutes now?:', new Date().getMinutes())
console.log('seconds elapsed from January 1, 1970 to now:', new Date().getTime())




// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const base = prompt('Enter base number:', 'Base number')
height = prompt('Enter height number:', 'Height number')
areaOfTriangle = 0.5 * base * height
AlertText = alert(areaOfTriangle)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
const sideA = parseInt(prompt('Enter side a:'))
sideB = parseInt(prompt('Enter side b:'))
sideC = parseInt(prompt('Enter side c:'))
perimeterOfTriangle =  sideA + sideB + sideC
console.log('The perimeter of triangle -- >',`${sideA} + ${sideB} + ${sideC} =`, perimeterOfTriangle)


// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = parseInt(prompt('Enter a length:'))
width = parseInt(prompt('Enter a width:'))
areaOfRectangle = length * width
perimeterOfRectangle = 2 * (length + width)
console.log('Area of rectangle:', `${areaOfRectangle}`)
console.log('Perimeter of rectangle:', `${perimeterOfRectangle}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = parseInt(prompt('Enter a radius:'))
areaOfCircle = Math.round(Math.PI * Math.pow(radius,2));
circumferenceoOCircle = Math.round(2 * Math.PI * radius)
console.log('Area of circle:', areaOfCircle)
console.log('Circumference of a circle:', circumferenceoOCircle)

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
const x = parseInt(prompt("Enter 'x' number:"))
y = 2*x-2
console.log('y = 2x - 2 ->',`y = 2 *${x} - 2:` , y)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const x1 = 2
y1 = 2
x2 = 6
y2 = 10
m = (y2-y1)/(x2-x1)
console.log(`m = (${y2} - ${y1}) / (${x2} - ${x1}) =`, m)

// Compare the slope of above two questions.
console.log(`${y} and ${m}`, y === m)

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let X = parseInt(prompt("Enter 'X' number:"))
Y = Math.pow(X,2) + 6 * X + 9
console.log('y =', Y)

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
const Hours = parseInt(prompt('Enter hours:'))
RateOfPerHours = parseInt(prompt('Enter rate per hour:'))
WeeklyEarnings = Hours * RateOfPerHours
console.log('Your weekly earning is', WeeklyEarnings)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let InputName = prompt('Input your name please')
Answer = InputName.length >= 7 ? 'your name is long' : ' your name is short.'
console.log(Answer)

// Compare your first name length and your family name length and you should get this output.
let EnterName = prompt('Enter your name:')
FamilyName = prompt('Enter your last name:')
Result = EnterName.length > FamilyName.length
    ? `Your first name ${EnterName} is longer than your last name, ${FamilyName}` 
    : `Your last name ${FamilyName} is longer than your first name, ${EnterName}`
console.log(Result)

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = parseInt(prompt('My age:'))
let yourAge = parseInt(prompt('Your age:'))
let Older,IamOlder,YouAreOlder
IamOlder = myAge - yourAge
YouAreOlder = yourAge - myAge
Older = myAge > yourAge
    ? `I am ${IamOlder} years older than you`
    :  `You are ${YouAreOlder} years older than me`
console.log(Older)

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const BirtDate = prompt('Enter birth year:')
let calculateAge, ResultOfDrivingTest, calculateNotEnoughAge
calculateAge = new Date().getFullYear() - BirtDate
calculateNotEnoughAge = 18 - calculateAge
ResultOfDrivingTest = calculateAge >= 18 
    ? `You are ${calculateAge}. You are old enough to drive`
    : `You are ${calculateAge}. You will be allowed to drive after ${calculateNotEnoughAge}`
console.log(ResultOfDrivingTest)

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearYouLive = prompt('Enter number of years you live:')
let secondsOfOneYear = 3.600 * 24 * 365
calculateYear = yearYouLive * secondsOfOneYear
console.log(`You lived ${calculateYear} seconds.`)






// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 3


// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
const Time = new Date()
Year = Time.getFullYear()
Month = ('0' + Time.getMonth()).slice(-2)
Day = ('0' + Time.getDate()).slice(-2)
Hour = ('0' + Time.getHours()).slice(-2)
Minute = ('0' + Time.getMinutes()).slice(-2)
ReadableTypeOne = `${Year}-${Month}-${Day} ${Hour}:${Minute}`
console.log(ReadableTypeOne)
