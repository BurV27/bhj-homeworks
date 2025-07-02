const listDrop = document.getElementsByClassName("dropdown__value")[0];
const addActive = document.getElementsByClassName("dropdown__list")[0];
const itemDrop = document.getElementsByClassName("dropdown__item");
const linkDrop = document.getElementsByClassName("dropdown__link");

function handleClick(event) {
    event.preventDefault();
}

listDrop.addEventListener('click', () => {
    addActive.classList.toggle("dropdown__list_active");
});

for(let i = 0; i < itemDrop.length; i++){
    linkDrop[i].addEventListener("click", () => {
        addActive.classList.toggle("dropdown__list_active");
        listDrop.textContent = `${linkDrop[i].textContent}`;
    });
};