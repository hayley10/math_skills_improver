const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');
const result = document.querySelector('.result');
const btn1 = document.querySelector('.reload');
const btn2 = document.querySelector('.send');
let a = firstNumber.value;
let b = secondNumber.value;

const reload = () => {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
};

btn1.addEventListener('click', reload);

// const add = () => {
//     a = 
//     a = firstNumber.value *1;
//     b = secondNumber.value *1;
//     sum = a + b;
//     result.textContent = `${a} plus ${b} gives ${sum}`;
//     firstNumber.value = '';
//     secondNumber.value = '';
// } 

// btn2.addEventListener('click', add);
