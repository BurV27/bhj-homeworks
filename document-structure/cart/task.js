const plus = document.getElementsByClassName('product__quantity-control_inc');
const minus = document.getElementsByClassName('product__quantity-control_dec');
const value = document.getElementsByClassName('product__quantity-value');
const imageCard = document.getElementsByClassName("product__image")
const products = document.getElementsByClassName('product');
const productAdd = document.getElementsByClassName('product__add');
const searchElem = document.getElementsByClassName('cart__product');
let count;

function addToCart(id, valueCount) {
  const cart = document.getElementsByClassName("cart__products")[0];
  const item = cart.querySelector(`[data-id="${id}"]`);

  if (item) {
    count.textContent = Number(count.textContent) + Number(valueCount);
    return
  }

  count = document.createElement("div");
  count.classList.add("cart__product-count");
  count.textContent = valueCount;

  const image = document.createElement("img");
  image.classList.add("cart__product-image");
  image.src = imageCard[id - 1].src;

  const product = document.createElement("div");
  product.classList.add("cart__product");
  product.dataset.id = id;

  product.append(image, count);

  cart.appendChild(product);
}


for (let i = 0; i < products.length; i++){
     plus[i].addEventListener('click', () => {
        if (!(value[i].textContent < 1)){
            value[i].textContent++;
        }
    })
    minus[i].addEventListener('click', () => {
        if (value[i].textContent > 1){
            value[i].textContent--;
        }
    })
    productAdd[i].addEventListener('click', () => {
            if(value[i].textContent >= 1){
                addToCart(products[i].dataset.id, value[i].textContent)
            }
        }
    )
}