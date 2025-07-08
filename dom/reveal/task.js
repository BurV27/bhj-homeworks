const blockEvent = document.getElementsByClassName("reveal");
let revealTop;
let revealBottom;


document.addEventListener('scroll', () => {
    for (let element of blockEvent){
        revealTop = element.getBoundingClientRect().top;
        revealBottom = element.getBoundingClientRect().bottom;
            if (revealTop > 0 && revealBottom < window.innerHeight){
                element.classList.add("reveal_active");
            } else {
                element.classList.remove("reveal_active");
    };
    };
});