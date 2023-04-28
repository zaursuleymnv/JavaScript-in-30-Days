// -------------------------------------- 30 Days Of JavaScript: Sets and Maps ---------------------------------------

const names1 = new Set(['Zaur', 'Eshref', 'Elchin', 'Osman']);
// for (const name of names1) {
//     console.log('Name: ', name );
// }

// names1.forEach(name => console.log(name))

[...names1].map(name => console.log(name))

const companies = new Set()
companies.add('Google')
companies.add('Apple')
console.log(companies);

// companies.forEach(company => console.log(company))

const companies2 = ['Google', ' Apple', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const addCompanies = new Set()

for (const company of companies2) {
    addCompanies.add(company)
}
addCompanies.delete('Oracle')
console.log(addCompanies);

console.log(addCompanies.has('Facebook'));

// addCompanies.clear()

console.log(addCompanies.has('Facebook'));

console.log(addCompanies);

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const langSet = new Set(languages)
const counts = []

for (const l of langSet) {
    const filteredLangs = languages.filter(lang => lang === l)
    counts.push({
        language: l, count: filteredLangs.length
    })
}
console.log(counts);

const a = [1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7]
const setA = new Set(a)
const setB = new Set(b)

const c = a.filter(num => setB.has(num))
console.log(c);

const c2 = b.filter(num => !setA.has(num))
console.log(new Set(c2));


// --------------------------------- Map () -------------------------- //#

const map = new Map()

const user1 = {
    name: 'Zaur',
    age: 22
}
const user2 = {
    name: 'Elchin',
    age: 22
}

map.set(user1)
    .set(user2)

console.log(map.get('age'));
console.log(map.entries);

[...map.entries()].forEach(user => {
    console.log(user);
});