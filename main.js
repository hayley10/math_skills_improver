//Collecting elements
const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');
const result = document.querySelector('.result');
const answer = document.querySelector('.answer');
const btn1 = document.querySelector('.reload');
const btn2 = document.querySelector('.send');
const info = document.querySelector('.info');
const btn3 = document.querySelector('.addBtn');
const btn4 = document.querySelector('.subtractBtn');
const btn5 = document.querySelector('.multiplyBtn');
const btn6 = document.querySelector('.divideBtn');
const skillType = document.querySelector('span');
let a;
let b;

//Changing types of mathematical operation

btn3.addEventListener('click', function () {
    skillType.textContent = 'adding';
    result.textContent = '';
    answer.value = '';
    info.textContent = '';
})

btn4.addEventListener('click', function () {
    skillType.textContent = 'subtracting';
    result.textContent = '';
    answer.value = '';
    info.textContent = '';
})

btn5.addEventListener('click', function () {
    skillType.textContent = 'multiplying';
    result.textContent = '';
    answer.value = '';
    info.textContent = '';
})

btn6.addEventListener('click', function () {
    skillType.textContent = 'dividing';
    result.textContent = '';
    answer.value = '';
    info.textContent = '';
})

//Reload button functionality, random numbers and clearing the form
const reloadFunction = () => {
    result.textContent = '';
    answer.value = '';
    info.classList.remove('correct');
    info.classList.remove('wrong');
    info.textContent = '';
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    firstNumber.textContent = a;
    secondNumber.textContent = b;
};

btn1.addEventListener('click', reloadFunction);

//Adding numbers function
const add = () => {
    c = firstNumber.textContent *1;
    d = secondNumber.textContent *1;
    
    if (skillType.textContent == 'adding') {
        sum = c + d;
    } else if (skillType.textContent == 'subtracting') {
        sum = c - d;
    } else if (skillType.textContent == 'multiplying') {
        sum = c * d;
    } else {
        sum = c / d;
    };
    
    result.textContent = sum;
    if (answer.value == sum) {
        info.textContent = `Poprawna odpowiedź`;
        info.classList.add('correct');
    } else {
        info.textContent = `Niestety, spróbuj jeszcze raz`;
        info.classList.add('wrong');
    }
} 

btn2.addEventListener('click', add);

