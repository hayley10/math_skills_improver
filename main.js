//Collecting elements
const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');
const result = document.querySelector('.result');
const answer = document.querySelector('.answer');
const btn1 = document.querySelector('.reload');
const btn2 = document.querySelector('.send');
const info = document.querySelector('.info');
let a;
let b;

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
    sum = c + d;
    result.textContent = sum;
    firstNumber.value = '';
    secondNumber.value = '';
    if (answer.value == sum) {
        info.textContent = `Poprawna odpowiedź`;
        info.classList.add('correct');
    } else {
        info.textContent = `Niestety, spróbuj jeszcze raz`;
        info.classList.add('wrong');
    }
} 

btn2.addEventListener('click', add);
