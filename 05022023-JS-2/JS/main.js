let country = 'Mexico, Germany, Azerbaijan, GERMANY, Italy'
let Replace = country.replace(/germany/gi, 'Australia') //To replace case insensitive and all matches, use a regular expression with an /i (insensitive) and /g (global match) flags:
console.log(Replace)
console.log(Replace.charAt(8))
console.log(country.charAt(8)) // The charAt() method returns the character at a specified index (position) in a string
console.log(country.split(' '))

let price = 14.5
console.log(Number.isSafeInteger(price))
console.log(Number.isInteger(15))

let arr1= new Array()
let arr2 = []
console.log(typeof arr1)
console.log(typeof arr2)

// You can also use the Array.forEach() function:
let names = ['Zaur','Elchin','Oktay','Aykhan','Eshref']
// names[names.length] = 'Hasan'
names.push('Hasan')

names.forEach((value, index, array) => {
    console.log(value, index, array)
})


// for (let i = 0; i < names.length; i++) {
//     console.log(names[i], i, names)
// }

// function isDisplayNames(value, index, array) {
//     console.log(value, index, array)
// }

let student = ['Namiq','Huseyn','Yaqub','Yusif','Ibrahim']
console.log(student.join(' / '))
student.pop() // The pop() method removes the last element from an array:
student.shift() // The shift() method removes the first array element and "shifts" all other elements to a lower index.
student.push('Eshref', 'Sarvan') // The push() method adds a new element to an array (at the end):
student.unshift('Osman') // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(student)
student.splice(3,1,'Elmar') // The splice() method can be used to add new items to an array:
let newStudents = student.slice(2) // The slice() method creates a new array and slice() method does not remove any elements from the source array.
console.log(student)
console.log(newStudents)
console.log(student.sort()) // The sort() method sorts an array alphabetically. This works well for strings. Because of this, the sort() method will produce incorrect result when sorting numbers.




// ------------------------------------------------ map() method ---------------------------------------------------------------------------------------

let points = [40, 100, 1, 5, 25, 10]
let point2Times = points.map(value => {    // The map() method creates a new array by performing a function on each array element.
    return value * 2
}).sort(function(a, b) {
    return a - b
})




// ------------------------------------------------ sort() method ---------------------------------------------------------------------------------------

console.log(point2Times) 
points.sort(function(a, b) { return a - b })  // // The sort() method sorts an array alphabetically. This works well for strings.
console.log(points)



const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a, b) { return a.year - b.year })
console.log(cars)





// ------------------------------------------------ filter() method ---------------------------------------------------------------------------------------

let pointsTwo = [40, 100, 1, 5, 25, 10, 16]
let resultTwo = pointsTwo.filter(value => {   // The filter() method creates a new array with array elements that pass a test.
    return value % 2 == 0
});
console.log(resultTwo)

// let resultTwo = pointsTwo.filter(FindExact)
// function FindExact(value) {
//     return value % 2 == 0            // The same process above but with function()
// }
// console.log(resultTwo)


let namesTwo = ['Mehemmed', 'Yaqub', 'Zaur', 'Elsever', 'Agammed','Eli', 'Yusif','Eshref','Elchin']
namesTwo.splice(4,1, 'Fexriyye')   // The splice() method can be used to add new items to an array:
namesLength = namesTwo.filter(value => {     // The filter() method creates a new array with array elements that pass a test.
    return value.length > 6
})
console.log(namesTwo)
console.log(namesLength)



let nums = [6, 2, 11, 65, 24, 9, -17, 78, 3 -5, -14, 21]
let resultThree = nums.filter(isBigEnough)

function isBigEnough(value) {
    return value > 10
}
console.log(nums)
console.log(resultThree)




// ------------------------------------------------ reduce() method ---------------------------------------------------------------------------------------

console.log(nums)
let resultFour = nums.reduce(totalNums)   // The reduce() method runs a function on each array element to produce (reduce it to) a single value.
function totalNums(total, value) {
    console.log('Total:', total, 'Value:', value)
    return total + value
}
console.log(resultFour)

// let resultFour = nums.reduce((total, value) => {
//     console.log(total)
//     return total + value
// })

// let resultFour = nums.reduce((total, value) => {
//     return total + value
// })
// console.log(resultFour)




// ------------------------------------------------ every() method ---------------------------------------------------------------------------------------

let ResultFive = pointsTwo.every(value => {    // The every() method checks if all array values pass a test.
    return value >= 0
})
console.log(ResultFive)




// ------------------------------------------------ some() method ---------------------------------------------------------------------------------------

let resultSix = pointsTwo.some(someFunction)   // The some() method checks if some array values pass a test.
function someFunction(value) {
    return value >= 30
}
console.log(resultSix)




// ------------------------------------------------ find() method ---------------------------------------------------------------------------------------

let resultSeven = pointsTwo.find(value => {   // The find() method returns the value of the first array element that passes a test function.
    return value > 55
})
console.log(resultSeven)




// ------------------------------------------------ findIndex() method ---------------------------------------------------------------------------------------

let resultEight = pointsTwo.findIndex(value => {   // The findIndex() method returns the index of the first array element that passes a test function.
    return value > 55
})
console.log(resultEight)




// ------------------------------------------------ Dates with moment() ---------------------------------------------------------------------------------------

console.log(moment().add(5, 'year').add(2, 'day').format("[Today is] DD MMMM YYYY"))
console.log(moment().add({day:4, year:5}).format("[Today is] DD MMMM YYYY"))
console.log(moment().subtract({day:4, year:7, month:5}).format("[Today is] DD MMMM YYYY"))
