const item = document.getElementsByClassName('item')

function createItems(){
    const code = document.createElement('div');
    code.classList.add('item__code');
    code.textContent;
    
    const value = document.createElement('div');
    value.classList.add('item__value');
    value.textContent;
    
    const currency = document.createElement('div');
    currency.classList.add('item__currency');
    currency.textContent;

    item.append(code, value, currency);
}