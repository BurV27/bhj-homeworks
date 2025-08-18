const tooltip = document.getElementsByClassName('has-tooltip');

function createElem(text){
    const tooltipElem = document.createElement('div');
    tooltipElem.classList.add('tooltip');
    tooltipElem.style = 'left: 50px; top: 50px';
    tooltipElem.textContent = text;

    tooltip.append(tooltipElem);
}

for (let elem of tooltip){
    elem.addEventListener('click', (e) => {
        e.preventDefault(); 

        createElem(elem.title);
    })
}