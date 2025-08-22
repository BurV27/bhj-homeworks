const form = document.forms[0]
const progress = document.getElementById('progress');

let xhr = new XMLHttpRequest();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.addEventListener('progress', (e)=> {
        progress.value = e.loaded / e.total
    }) 
    xhr.open('POST', "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send()
})
