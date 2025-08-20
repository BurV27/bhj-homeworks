const tooltip = document.getElementsByClassName('has-tooltip');
let rectObjectTop;
let rectObjectLeft;

function createElem(text, elem){
    const tooltipElem = document.createElement('div');
    tooltipElem.classList.add('tooltip');
    tooltipElem.classList.add('tooltip_active');
    tooltipElem.style = "left: 0; top: 0";
    tooltipElem.textContent = text;

    rectObjectTop = tooltip[elem].getBoundingClientRect().top;
    rectObjectLeft = tooltip[elem].getBoundingClientRect().left;
    tooltipElem.style.top = `${rectObjectTop}px`;
    tooltipElem.style.left = `${rectObjectTop}px`;


    tooltip[elem].insertAdjacentElement("afterEnd", tooltipElem)
}

for (let i = 0; i < tooltip.length; i++){
    tooltip[i].addEventListener('click', (e) => {
        e.preventDefault(); 
        const active = document.getElementsByClassName("tooltip_active")[0]

        if(active){
            active.remove('tooltip_active')
            createElem(tooltip[i].title, i);
        } else {
            createElem(tooltip[i].title, i);
        }
    })
}