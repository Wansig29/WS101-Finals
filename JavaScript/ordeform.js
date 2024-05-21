
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Double Chocolate Chip',
        image: 'PASTRIES (1).png',
        price: 75 
    },

    {
        id: 2,
        name: 'Chocolate Chip',
        image: 'PASTRIES (4).png',
        price: 60 
    },

    {
        id: 3,
        name: 'RED VELVET',
        image: 'PASTRIES (5).png',
        price: 75
    },

    {
        id: 4,
        name: 'OAT Cookies',
        image: 'PASTRIES (6).png',
        price: 75
    },

    {
        id: 5,
        name: 'Chocolate Walnut',
        image: 'PASTRIES.png',
        price: 75
    },

    {
        id: 6,
        name: 'Blueberry Cheesecake',
        image: 'PASTRIES (7).png',
        price: 180
    },
    {
        id: 7,
        name: 'Mango Cheesecake',
        image: 'PASTRIES (8).png',
        price: 180
    },
    {
        id: 8,
        name: 'Chocolate Cake',
        image: 'PASTRIES (9).png',
        price: 100
    },
    {
        id: 9,
        name: 'Strawberry Cheesecake',
        image: 'PASTRIES (10).png',
        price: 180
    },
    {
        id: 10,
        name: 'Oreo Cheesecake',
        image: 'PASTRIES (11).png',
        price: 180
    },

    {
        id: 11,
        name: 'Biscoff Cheesecake',
        image: 'PASTRIES (12).png',
        price: 180
    },
    {
        id: 12,
        name: 'Burnt Basque Cheesecake',
        image: 'PASTRIES (13).png',
        price: 180
    },

    {
        id: 13,
        name: 'Sliced Red Velvet Cake',
        image: 'PASTRIES (14).png',
        price: 120
    },

    {
        id: 14,
        name: 'Red Velvet Whole Cake',
        image: 'PASTRIES (15).png',
        price: 550
    },

    {
        id: 15,
        name: 'Chocolate Whole Cake',
        image: 'PASTRIES (16).png',
        price: 120
    },

    {
        id: 16,
        name: 'Vanilla Whole Cake',
        image: 'PASTRIES (17).png',
        price: 120
    },

    {
        id: 17,
        name: 'Vanilla Cupcake',
        image: 'PASTRIES (18).png',
        price: 65
    },

    {
        id: 18,
        name: 'Ube De Leche Whole Cake',
        image: 'PASTRIES (19).png',
        price: 550
    },

    {
        id: 19,
        name: 'Sliced Ube De Leche Cake',
        image: 'PASTRIES (20).png',
        price: 120
    },

    {
        id: 20,
        name: 'YEMA Whole Cake',
        image: 'PASTRIES (22).png',
        price: 550
    },

    {
        id: 21,
        name: 'Sliced YEMA Cake',
        image: 'PASTRIES (23).png',
        price: 120
    },

    {
        id: 22,
        name: 'Red Velvet Cupcake',
        image: 'PASTRIES (24).png',
        price: 65
    },

    {
        id: 23,
        name: 'Chocolate Cupcake',
        image: 'PASTRIES (26).png',
        price: 50
    },

    {
        id: 24,
        name: 'Blueberry Whole Cheesecake',
        image: 'PASTRIES (27).png',
        price: 1449
    },

    {
        id: 25,
        name: 'Strawberry Whole Cheesecake',
        image: 'PASTRIES (28).png',
        price: 1449
    },

    {
        id: 26,
        name: 'Mango Whole Cheesecake',
        image: 'PASTRIES (29).png',
        price: 1449
    },

    {
        id: 27,
        name: 'Sliced Burnt Basque Cheesecake',
        image: 'PASTRIES (30).png',
        price: 180
    },

    {
        id: 28,
        name: 'Biscoff Whole Cheesecake',
        image: 'PASTRIES (31).png',
        price: 1449
    },

    {
        id: 29,
        name: 'Oreo Whole Cheesecake',
        image: 'PASTRIES (32).png',
        price: 1449
    },

    {
        id: 30,
        name: 'Chocolate Cake In A Pan',
        image: '2.png',
        price: 150
    },

    {
        id: 31,
        name: 'YEMA Cake In A Pan',
        image: '3.png',
        price: 150
    },

    {
        id: 32,
        name: 'Cupcake Bouquet',
        image: '4.png',
        price: 300
    },

    {
        id: 33,
        name: 'Flower Cake Bouquet',
        image: '6.png',
        price: 420
    },

    {
        id: 34,
        name: 'Bento Flower Cake',
        image: '7.png',
        price: 200
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
