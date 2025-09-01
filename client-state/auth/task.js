const signin = document.getElementById('signin')
const form = document.forms[0];
const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');


if(localStorage.localIdUser){
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = `${localStorage.localIdUser}`
}

form.addEventListener('submit', e => {
    e.preventDefault()
})

const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

const formData = new FormData();
btn.addEventListener('click', () => {
    formData.append('login', login.value);
    formData.append('password', password.value);

    xhr.send(formData)
})

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        if(JSON.parse(xhr.response).success === true){
            localStorage.setItem('localIdUser', JSON.parse(xhr.response).user_id)
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.textContent = `${JSON.parse(xhr.response).user_id}`
            console.log(localStorage.localIdUser)
        } else if (JSON.parse(xhr.response).success === false){
            alert("Ошибка: неверный логин или пароль")
        }
    }
}