const modalActive = document.getElementById('subscribe-modal');
const modalClose = document.getElementsByClassName('modal__close')[0];

const getCookie = (name) => {
const value = "; " + document.cookie;
let parts = value.split("; " + name + "=");
if (parts.length === 2) {
return parts
.pop()
.split(";")
.shift();
}
}


modalClose.addEventListener('click', ()=>{
    modalActive.classList.remove('modal_active')
    document.cookie = 'flagClose=true';
})


if (getCookie('flagClose') === undefined){
    modalActive.classList.add('modal_active')
} 


// Можно пойти от обратного, по поиску значения true в flagClose,
// но сделал более простой вариант поиска значения в куках...