// -------------------------------------- 30 Days Of JavaScript: Destructuring and Spread ---------------------------------------

const numbers1 = [12, 16, 4, 7, 8]
const [numOne, numTwo, ...rest] = numbers1
console.log(numTwo);
console.log(rest);

const stack = [
    ['HTML', 'CSS', ['JAVASCRIPT', 'REACT', 'ANGULAR']],
    ['PHP', 'MYSQL', 'NODEJS']
]
const [[firstTech, ,[firstThirdTech, ,thirdThirdTech]], backend] = stack
console.log(firstTech);
console.log(firstThirdTech);
console.log(thirdThirdTech);
console.log(backend);

const names1 = ['Zaur', 'Elchin', 'Eshref', 'Osman', 'Ayten', 'Leman']
const [firstName, secondName, thirdName, ...otherNames] = names1
console.log(firstName);
console.log(otherNames);

const countries = [
    ['Finland', 'Helsinki'], 
    ['Sweden', 'Stockholm'], 
    ['Norway', 'Oslo'],
    ['Poland', 'Warsaw'],
]

for (const [country, capital] of countries) {
    console.log(`Country:${country} and Capital:${capital}`);
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
for (const [first, second, third] of fullStack) {
    console.log(first, second, third);
}



// -------- Object ------------- //

// const user = {
//     name: 'Zaur',
//     surname: 'Suleymanov',
//     age: 22,
//     pets: {
//         cats: ['Lelo'],
//         dogs: ['Jake']
//     }
// }

// const {surname: soyad} = user
// const {age} = user
// const {pets} = user
// console.log(soyad);
// console.log(age);
// console.log(pets);

const user = {
    name: 'Zaur',
    surname: 'Suleymanov',
    age: 22,
    pets: {
        cats: ['Lelo'],
        dogs: ['Jake']
    },
    skills: ['HTML,', 'CSS', 'JAVASCRIPT', 'REACT', 'SASS', 'JQUERY', 'BOOTSTRAP']
}

function showUserInfo({name, surname, age, pets:{cats, dogs}, skills: [skill1, skill2, skill3, ...otherSkills]}) {
    console.log(otherSkills);
    return `Hello my name is ${name} ${surname}, I am ${age} years old. And I have ${cats.length} cat and ${dogs.length} dog `
}

console.log(showUserInfo(user));

const user1 = {
    name:'Zaur',
    title:'Front End Programmer',
    country:'Poland',
    city:'Krakow'
  }
  
const copiedUser = {...user1}
console.log(copiedUser)


const numbers2 = [1, 7, 5]
const newNumber = [0, ...numbers2, 10]
console.log(numbers2);
console.log(newNumber);



// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(gravity);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries1 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, swe, den, nor] = countries1

// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const {width, height, area, perimeter} = rectangle
console.log(area);


// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2

// Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTML', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

users.forEach(({name, scores, skills, age}) => {
    console.log(Object.keys({name, scores, skills, age}));
});

// Find the persons who have less than two skills
const lessThanTwoSkills = users.filter(user => user.skills.length < 2)
console.log(lessThanTwoSkills);



// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 3

/* A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
Destructure the following array name to name, skills array to skills, scores array to scores, 
JavaScript score to jsScore and React score to reactScore variable in one line.
*/

const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [htmScore, cssScore, jsScore, reactScore]] = student1;
console.log(name, skills, jsScore, reactScore)

// Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
  const result = arr.map(([name, skills, scores]) => {
    return {name, skills, scores}
  })

  return result
}

const studentObjects = convertArrayToObject(students);
console.log(studentObjects);

// Copy the student object to newStudent without mutating the original object. In the new object add the following

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = {
  ...student,

  skills: {
    ...student.skills,
    
    frontEnd: [
      ...student.skills.frontEnd,
      {skill: 'Bootstrap', level: 8}
    ],

    backEnd: [
      ...student.skills.backEnd,
      {skill: 'Express', level: 9}
    ],

    dataBase: [
      ...student.skills.dataBase,
      {skill: 'SQL', level: 8}
    ],

    dataScience: [
      ...student.skills.dataScience,
      ['SQL']
    ]
  }
}
console.log(newStudent);