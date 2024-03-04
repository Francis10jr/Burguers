const List = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function showAll(productsArray) {
    myLi =""

    productsArray.forEach((product) => {
        myLi +=
            `
           <li>
                <img src=${product.src}>
                <P>${product.name}</P>
                <P class="item-price">R$ ${product.price}</P>
            </li>
            `


    })
    List.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //dar 10% de desconto p/ o cliente

    }))
    showAll(newPrices)
}





buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)