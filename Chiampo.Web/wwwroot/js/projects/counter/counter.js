var increment = document.getElementById('btn-increment');
var decrement = document.getElementById('btn-decrement');
var reset = document.getElementById('btn-reset');
var counter = document.getElementById('counter');
increment.addEventListener('click', function () {
    counter.textContent = (parseInt(counter.textContent) + 1).toString();
});
decrement.addEventListener('click', function () {
    counter.textContent = (parseInt(counter.textContent) - 1).toString();
});
reset.addEventListener('click', function () {
    counter.textContent = '0';
});
//# sourceMappingURL=counter.js.map