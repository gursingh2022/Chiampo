let increment = document.getElementById('btn-increment');
let decrement = document.getElementById('btn-decrement');
let reset = document.getElementById('btn-reset');

let counter = document.getElementById('counter');

increment.addEventListener('click', () => {
    counter.textContent = (parseInt(counter.textContent) + 1).toString();
});

decrement.addEventListener('click', () => {
    counter.textContent = (parseInt(counter.textContent) - 1).toString();
});

reset.addEventListener('click', () => {
    counter.textContent = '0';
});

