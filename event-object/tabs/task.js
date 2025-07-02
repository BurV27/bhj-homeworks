const tabElement = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tab__content");

for (let i = 0; i < tabElement.length; i++){
    tabElement[i].addEventListener('click', (elem) => {
        if(!(tabElement[i].classList.contains('tab_active'))){
            for (let j = 0; j < tabElement.length; j++){
                tabElement[j].classList.remove("tab_active");
                tabContent[j].classList.remove("tab__content_active");
            }
            tabElement[i].classList.toggle('tab_active');
            tabContent[i].classList.toggle("tab__content_active");
        };
    });
};