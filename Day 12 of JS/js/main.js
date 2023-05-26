// -------------------------------------- 30 Days Of JavaScript: Regular Expressions ---------------------------------------

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
// let regEx = new RegExp('love', 'gi')

let regex = /love/gi

// let word = /stupid/i
// let comment = prompt('Write a comment but be crafeul while writing!:', 'Do not write stupid :))')

// if (word.test(comment)) {
//     alert('No you are stupid!')
// }

let str1 = 'I LOVE JavaScript and I love React'
console.log(str1.match(/love/gi));

let str2 = 'I LOVE JavaScript and I love React'
let pattern2 = /love/gi
console.log(str2.search(pattern2));

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

const matchReplaced = txt.replace(/python/gi, 'JavaScript')
console.log(matchReplaced)

const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

console.log(txt2.replaceAll('%', ''));
console.log(txt2.replace(/%/g, ''));

let text1 = 'I am 22 years old and I was born in 2000. And telephone number is 7575575'
// let set = new Set(text1.match(/[0-9]/g))
console.log(text1.match(/[0-9]/g));
console.log(text1.match(/\d+/g));
console.log(text1.match(/\d{2}/g));
console.log(text1.match(/\b\d{2}\b/g));
console.log(text1.match(/\b\d{2,4}\b/g));

let name = 'Zauyrgr'
console.log(/[uy]r$/.test(name));
console.log(/a?r$/.test(name));

const txt3 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern3 = /[Ee]-?mail/g      // ? means optional
const result = txt3.match(pattern3)
console.log(result);

const txt4 = 'This regular expression example was made in December 6,  2019.'
const pattern4 = /\b\w{4}\b/g
const result2 = txt4.match(pattern4)
console.log(result2);

const pattern5 = /\b[a-zA-Z]{4}\b/g
const result3 = txt4.match(pattern5)
console.log(result3);

const emailValidation = /\w+@\w+\.[a-zA-Z]{2,}/gmi
if (emailValidation.test('szaur018@gmail.com')) {
    alert('Success')
}
else {
    alert('Failed')
}