const items = document.getElementById('items');
const loader = document.getElementsByClassName('loader_active')[0]


let xhr = new XMLHttpRequest();
xhr.open("GET",'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === 4){
        result = JSON.parse(xhr.responseText)
        createItems();
        loader.classList.remove("loader_active")
    }
})

function createItems(){
    let elements = result.response.Valute
    
    for (let key in elements){
        const item = document.createElement('div')

        const code = document.createElement('div');
        code.classList.add('item__code');
        code.textContent = elements[key].CharCode;
        
        const value = document.createElement('div');
        value.classList.add('item__value');
        value.textContent = elements[key].Value;
        
        const currency = document.createElement('div');
        currency.classList.add('item__currency');
        currency.textContent = 'руб.';

        item.append(code, value, currency);
        items.appendChild(item);
    }
    
}
