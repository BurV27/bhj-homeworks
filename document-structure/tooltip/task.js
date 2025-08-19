const tooltip = document.getElementsByClassName('has-tooltip');

function createElem(text, elem){
    const tooltipElem = document.createElement('div');
    tooltipElem.classList.add('tooltip');
    tooltipElem.classList.add('tooltip_active');
    tooltipElem.style = "left: 0; top: -2em";
    tooltipElem.textContent = text;

    tooltip[elem].appendChild(tooltipElem)
}


for (let i = 0; i < tooltip.length; i++){
    tooltip[i].addEventListener('click', (e) => {
        e.preventDefault(); 

        createElem(tooltip[i].title, i);
    })

}