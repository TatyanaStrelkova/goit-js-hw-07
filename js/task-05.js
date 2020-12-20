const inputNameRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', () => (nameLabelRef.textContent = event.target.value ? event.target.value : 'незнакомец'));