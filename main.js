/* Collecting elements */

const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');
const result = document.querySelector('.result');
const answer = document.querySelector('.answer');
const btnReload = document.querySelector('.reload');
const btnSubmit = document.querySelector('.submit');
const info = document.querySelector('.info');
const btnAdding = document.querySelector('.addBtn');
const btnSubtracting = document.querySelector('.subtractBtn');
const btnMultiplying = document.querySelector('.multiplyBtn');
const btnDividing = document.querySelector('.divideBtn');
const skillType = document.querySelector('span');

/* resetting form */
function resetTask() {
    result.textContent = '';
    answer.value = '';
    info.textContent = ''; 
    info.classList.remove('correct');
    info.classList.remove('wrong');
}

/* Changing types of mathematical operation */

function skillEventListener(skill) {
    function toReturn() {
        skillType.textContent = skill;
        reloadFunction();
    }
    return toReturn;
}

btnAdding.addEventListener('click', skillEventListener('adding'));
btnSubtracting.addEventListener('click', skillEventListener('subtracting'));
btnMultiplying.addEventListener('click', skillEventListener('multiplying'));
btnDividing.addEventListener('click', skillEventListener('dividing'));

/* Reload button functionality, random numbers */

const reloadFunction = () => {
    resetTask();
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    if (skillType.textContent == "dividing") {
        /* ensures that result is always an integer */
        firstNumber.textContent = a * b;
    } else if (skillType.textContent == "subtracting") {
        /* ensures the result is always positive */
        firstNumber.textContent = a + b;
    } else {
        firstNumber.textContent = a;
    }
    secondNumber.textContent = b;
};

btnReload.addEventListener('click', reloadFunction);

// if (info !== '') {
// answer.addEventListener('keyup', function () {
//     if (event.keyCode === 13) {
//         reloadFunction();
//     }
// });
// };


/* Calculating */
const count = () => {
    c = firstNumber.textContent *1;
    d = secondNumber.textContent *1;
    
    if (skillType.textContent == 'adding') {
        countResult = c + d;
    } else if (skillType.textContent == 'subtracting') {
        countResult = c - d;
    } else if (skillType.textContent == 'multiplying') {
        countResult = c * d;
    } else {
        countResult = c / d;
    };
    
    result.textContent = countResult;

    if (answer.value == result.textContent) {
        info.textContent = `Correct!`;
        info.classList.add('correct');
    } else {
        info.textContent = `Wrong, try again.`;
        info.classList.add('wrong');
    }
} 

btnSubmit.addEventListener('click', count);

answer.addEventListener('keyup', function () {
    if (event.keyCode === 13) {
        if (result.textContent == '') {
        count();
        } else {
            reloadFunction();
        }
    }
});

window.onload = (event) => reloadFunction();
