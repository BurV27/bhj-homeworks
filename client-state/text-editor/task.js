const textarea = document.getElementById('editor');
const form = document.forms[0];
const btn = document.getElementById('btn');
let result;

textarea.addEventListener('change', () => {
    result = textarea.value;
    localStorage.setItem('result', result)
})

form.addEventListener('submit', e => {
    e.preventDefault();
})

btn.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem('result');
})

textarea.value = localStorage.getItem('result');