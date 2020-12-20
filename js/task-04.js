const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIincrementRef = document.querySelector('button[data-action="increment"]');
let counterValue = document.getElementById('value');
counterValue.textContent = 0;
btnIincrementRef.addEventListener('click', () => (counterValue.textContent = +counterValue.textContent + 1));
btnDecrementRef.addEventListener('click', () => (counterValue.textContent -= 1));