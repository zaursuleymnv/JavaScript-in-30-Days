// ------------------------------------- DOM (Document Object Model) -------------------------------------------------

// Content and Value change
// Attribute crud (Create, Read, Update, Delete)
// Class crud (Create, Read, Update, Delete)
// Node (Istədiyimiz hər hansı bir elementi (ul/li p...) əlavə edə və ya silə bilərik)
// Navigation (Keçid) - Hər hansı bir elementin parentini, child'nı, qardaşlarını tapa bilərik.
// Event (Bu çox önəmlidi və hər zaman istifadə olunur. Məsələn bir buttona click edəndə nəsə olsun, scroll edəndə səhifəni nəsə olsun və s bu kimi şeylər)



console.log(window);


// -------------------------------------- Content ------------------------------------------------

let textElem = document.querySelector(".text") // We should first to get our html element by querySelector() method
// textChange = textElem.innerHTML = 'Hello World.' // We use all content changings by using 'innerHTML'
// textElem.innerHTML = '<b>Salam</b>'
console.log(textElem.innerHTML.length);
console.log(textElem.innerHTML.replace(/lorem/gi, 'Zaur'))

if(textElem.innerHTML.length < 300 ) {
    textElem.innerHTML += '<br><b>Text is not long enough</b>'
}
else {
    textElem.innerHTML += '<br><b>Good Text, Well done!</b>'
}



// let studentsGroup = document.querySelectorAll('.students li')
// studentsGroup[0].innerHTML = 'Zaur 1'
// console.log(studentsGroup);



let emailElem = document.querySelector('#exampleInputEmail1');
emailElem.value = 'zaur@code.edu.az';

emailElem.addEventListener('blur', function() {
    if(emailElem.value.endsWith('code.edu.az')) {
        console.log(emailElem.value);
    }
    else {
        alert('You can only input e-mail with code.edu.az');
    }

});

emailElem.addEventListener('input', function(e) {
    console.log(e.data);
    console.log(e.inputType);
});



// -------------------------------------- Attribute (Create, Read, Update, Delete) ------------------------------------------------

textElem.setAttribute('title', 'I am three days step ahead on JavaScript') // Create or Update
// console.log(textElem.getAttribute('title')); // Get Atrribute
// textElem.removeAttribute('title'); // Delete Attribute
console.log(textElem.hasAttribute('title'));




// -------------------------------------- Class (Create, Read, Update, Delete) ------------------------------------------------

textElem.classList.add('border-top-0'); // Add new class item
textElem.classList.remove('border') // Remove class item
console.log(textElem.classList.contains('border')); // if element contains a class item it return true, otherwise is false
textElem.classList.toggle('p-3')
console.log(textElem.classList.item(1)); // It returns the index of class item

// textElem.classList.forEach(classItem => {
//     console.log(classItem);
// })

let studentGroup = document.querySelectorAll('.students li');
studentGroup.forEach(element => {                               // The forEach() method calls a function for each element in an array. Mütləq döngü qurmalıyıq.
    element.addEventListener('click', function(e) {
        console.log(e);
        this.classList.toggle('active');           // this o deməkdirki biz hansı elementə click ediriksə event məhz o elementə tətbiq olunsun.
        let iconSelect = this.querySelector('i')

        if(this.classList.contains('active')) {
            iconSelect.classList.replace('fa-circle', 'fa-circle-check')
        }
        else {
            iconSelect.classList.replace('fa-circle-check', 'fa-circle')
        }
    });
});


// Show Sidebar menu
let sidebar = document.querySelector('.sidebar');
let showButton = document.querySelector('#showBtn');

showButton.addEventListener('click', function() {
    sidebar.classList.toggle('show')
})





// -------------------------------------- Events ------------------------------------------------

// Way 1 to run
function toggleSidebar() {             // Əgər biz bir funksiyanı çox yerdə (birdən artıq) istifadə edəcəyiksə funksiya ya ad verməliyik
    sidebar.classList.toggle('show')
}
showButton.onclick = toggleSidebar;

// Way 2 to run
showButton.onclick = function() {     // Anonymous function (a function without a name). Əgər biz bir funksiyanı bir dəfə bir yerdə istifadə edəcəyiksə bu formada (Anonymous function) yazırıq
    sidebar.classList.toggle('show');
};


// Way 3 to run
// showButton.addEventListener('click', MenuBtnClicked1);
// showButton.addEventListener('click', MenuBtnClicked2); // birdən artıq event işlədə bilərik
// showButton.removeEventListener('click', MenuBtnClicked2); // Eventi silədə bilərik

// function MenuBtnClicked1() {
//     console.log('Function 1');
//     sidebar.classList.toggle('show');
// }

// function MenuBtnClicked2() {
//     console.log('Function2');
// }


// Way 4 to run
showButton.addEventListener('click', () => {     // I love that way
    sidebar.classList.toggle('show');           // Ən yaxşə yol event (addEventListener()) istifadə etməkdi
})

// showButton.addEventListener('click', function() {   // The same way to run above.I just used function() after 'click'
//     sidebar.classList.toggle('show');
// })



// ----------------------------------------- MouseEvent ------------------------------------------------------------

let humanBody = document.querySelector('.human-body-wrapper')
humanBody.addEventListener('click', e => {                      // I can create 'e or (e)' (e = event). I can name whatever I want
    let span = document.createElement('span')
    span.style.top = (e.offsetY - 8.5) + 'px'
    span.style.left = (e.offsetX - 8.5) + 'px'
    humanBody.append(span)
    // console.log(span);
});


