// -------------------------------------- 30 Days Of JavaScript: Objects ---------------------------------------

// let a = 10
// b = 'Javascript' // this is a global scope variable and found in the window object

// console.log(a, b);

let a = 'JavaScript'
let b = 10 
function letsLearnScope() {
  console.log(a, b)   // JavaScript 10
  if (true) {  // block scope
    let a = 'Python'
    let b = 100   // local scope
    console.log(a, b)   // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b)   // JavaScript 10

{
    let name ='Zaur'
    let surname = 'Suleymanov'  // local scope

    console.log(name, surname);
}


const person = {
    firstName: 'Zaur',
    lastName: 'Suleymanov',
    age: 22,
    country: 'Poland',
    city: 'Krakow',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Jquery'
    ],

    isMarried: false,

    siblings: [
        {
            firstName: 'Ayten',
            surname: ' Suleymanova',
            age: '18',
            isMarried: false
        }
    ],

    test: {
      text: 'check test'
    },

    'phone number': '+48837387040',

    getFullName: function() {
      return `${this.firstName} ${this.lastName}` // this
    },

    // arrow function
    getFullName2: () => `${person.firstName} ${person.lastName}`, // person
  }

  // Object.seal(person) // we cannot add or remove a new value to an object

  person.title = 'student'

  // Object.freeze(person) // we cannot modify the content of an object

  person.firstName = 'Napoleon'
  person.age = '25'

  console.log(person["phone number"]);
  console.log(person.firstName);
  console.log(person['isMarried'] ? 'married' : 'not married');
  console.log(person['skills']);
  console.log(person.test.text);
  console.log(person.siblings[0].isMarried);
  console.log(person.getFullName());
  console.log(person.getFullName2());

  // let techs = 'skills'
  // console.log(person[techs]);

  person.getPersonInfo = function() {
    // let skillsWithoutLastOne = this.skills
    //   .splice(0, this.skills.length - 1)
    //   .join(', ')
    
    //   let lastSkill = this.skills.splice(this.skills.length -1)
    //   let skills = `${skillsWithoutLastOne} and ${lastSkill}`

      const formatter = new Intl.ListFormat('en', { 
        style: 'long', 
        type: 'conjunction' 
      });
      let skills = formatter.format(this.skills)
      let fullName = this.getFullName()
      let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe learns ${skills}`

      return statement
  }

  console.log(person);
  console.log(person.getPersonInfo());

  let newPerson = Object.assign({}, person)
  // let newPerson2 = {...person}
  console.log(person);

  newPerson.firstName = 'Eshref'
  console.log(person);

  console.log(Object.keys(newPerson));
  console.log(Object.values(newPerson));

  console.log(Object.entries(person));

  for (let [key, val] of Object.entries(person)) {
    // console.log(`Key = ${key} and Value = ${val}`);
  }

  console.log(person.hasOwnProperty('country')); // true





  // -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 1

// Create an empty object called dog

let dog = {
  name: 'Sebastian',
  legs: '4',
  color: 'dark brown',
  bark: 'woof woof',
  breed: 'male',
  getDogInfo: function() {
    return `${this.bark}`
  }
}
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark);





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 2

// Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let mostSkillCount = 0
let mostSkilledPerson = null

for (const [username, user] of Object.entries(users)) {
  let skillCount = user.skills.length

  if (skillCount > mostSkillCount) {
    mostSkilledPerson = username
    mostSkillCount = skillCount
  }
}
console.log(`${mostSkilledPerson} has more skills with ${mostSkillCount} than others`);

// Count logged in users, count users having greater than equal to 50 points from the following object.

// Way 1
let userLogged = null
let countPoint = 0
let userPoint = null
let countLogged = 0

for (const user of Object.values(users)) {
  userLogged = user.isLoggedIn
  userPoint = user.points

  // for (let i = 0; i < userLogged; i++) {
    if (user.isLoggedIn) {
      countLogged ++    
    }
  // }

    if (user.points >= 50) {
      countPoint ++  
    }

  // console.log(user.isLoggedIn);
}
console.log(`Number of logged in users: ${countLogged}`);
console.log(`Number of users having 50 or more points: ${countPoint}`);

// Way 2
let loggedInCount = 0;
let highPointsCount = 0;

for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }

  if (users[user].points >= 50) {
    highPointsCount++;
  }
}

console.log(`Number of logged in users: ${loggedInCount}`);
console.log(`Number of users having 50 or more points: ${highPointsCount}`);

// Find people who are MERN stack developer from the users object

// Way 1
for (const [username, user] of Object.entries(users)) {
  let mernSkill = user.skills 

  if (
    mernSkill.includes('MongoDB') &&
    mernSkill.includes('Express') &&
    mernSkill.includes('React') &&
    mernSkill.includes('Node')
    ) {
    console.log(`${username} is a MERN stack developer`);
  }
}

// Way 2
for (let user in users) {
  const skills = users[user].skills;
  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    console.log(`${user} is a MERN stack developer`);
  }
}

// Set your name in the users object without modifying the original users object

// Way 1
let newUsers = Object.assign({}, users)

newUsers['Zaur'] = {
  email: 'szaur018@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'Bootstrap', 'Sass'],
  age: 22,
  isLoggedIn: true,
  points: 60
}
console.log(newUsers);

// Way 2
const newUsers2 = {...users};

newUsers2['Sebastian'] = {
  email: 'sebastian777@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  age: 25,
  isLoggedIn: true,
  points: 80
};

console.log(newUsers2);

// Get all keys or properties of users object

// Way1
const entries = Object.entries(newUsers)
console.log(entries)

// Way2
for (const key of Object.keys(users)) {
  console.log(key);
}

for (const val of Object.values(users)) {
  console.log(val);
}

// Get all the values of users object

// Way 1
for (const val of Object.values(users)) {
  console.log(val);
}

// Way 2
const values = Object.values(users)
console.log(values);

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
  Poland: {
    capital: 'Warsaw',
    population: 38036118,
    languages: ['Polish, English']
  },
  Azerbaijan: {
    capital: 'Baku',
    population: 9730500,
    languages: ['Azerbaijani', 'Russian']
  },
  Afghanistan: {
    capital: 'Kabul',
    population: 27657145,
    languages: ['Pashto', 'Uzbek', 'Turkmen']
  },
  Armenia: {
    capital: 'Yerevan',
    population: 2994400,
    languages: ['Armenian', 'Russian']
  },
};

for (const [country, info] of Object.entries(countries)) {
  console.log(`Country: ${country}`);
  console.log(`Capital: ${info.capital}`);
  console.log(`Population: ${info.population}`);
  console.log(`Languages: ${info.languages.join(', ')}`);
  console.log('-----------------------------');
}





// -----------------------------------------------------------------------------------------------------------------

//                                            Exercises: Level 3

/* Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. 
*/
const personAccount = {
  firstName: 'Zaur',
  lastName: 'Suleymanov',
  incomes: [],
  expenses: [],

  totalIncome: function() {
    let sum = 0;
    for (let income of this.incomes) {
      sum += income.amount;
    }
    return sum;
  },

  totalExpense: function() {
    let sum = 0;
    for (let expense of this.expenses) {
      sum += expense.amount;
    }
    return sum;
  },

  accountInfo: function() {
    return `Account Information for ${this.firstName} ${this.lastName}\n` +
           `Total Income: ${this.totalIncome()}\n` +
           `Total Expense: ${this.totalExpense()}\n` +
           `Account Balance: ${this.accountBalance()}`;
  },

  addIncome: function(description, amount) {
    this.incomes.push({ description: description, amount: amount });
  },

  addExpense: function(description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },

  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

const ZaurSuleymanov = Object.create(personAccount);
ZaurSuleymanov.firstName = 'Zaur';
ZaurSuleymanov.lastName = 'Suleymanov';

ZaurSuleymanov.addIncome('Salary', 4500);
ZaurSuleymanov.addIncome('Bonus', 500);
ZaurSuleymanov.addExpense('Rent', 1000);
ZaurSuleymanov.addExpense('Food', 500);

console.log(ZaurSuleymanov.accountInfo());