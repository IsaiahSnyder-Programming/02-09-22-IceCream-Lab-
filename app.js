console.log('app.js Working');

let currentOrder = {}


let cones = [
    {
        id: 1,
        name: 'Bowl',
        price: 1,
        image: 'https://www.cleaneatingmag.com/wp-content/uploads/2020/07/71ajvdxiccl_ac_sl1500_-1.jpg',
    },
    {
        id: 2,
        name: 'Waffle Bowl',
        price: 1,
        image: 'https://m.media-amazon.com/images/I/81etZfGXQXS._SX679_PIbundle-60,TopRight,0,0_SX679SY476SH20_.jpg',
    },
    {
        id: 3,
        name: 'Waffle Cone',
        price: 1,
        image: 'https://m.media-amazon.com/images/I/71AoVY1mHwL._SX425_PIbundle-216,TopRight,0,0_AA425SH20_.jpg',
    },
    {
        id: 4,
        name: 'Kids',
        price: 1,
        image: 'https://www.webstaurantstore.com/images/products/large/4756/1914043.jpg',
    },
]

let iceCreams = [
    {
        id: 1,
        name: 'Vanilla',
        price: 5,
        image: 'https://static.toiimg.com/thumb/63971154.cms?width=573&height=430',
    },
    {
        id: 2,
        name: 'Chocolate',
        price: 5,
        image: 'https://www.cuisinevault.com/wp-content/uploads/2020/04/Chocolate-ice-cream.jpg',
    },
    {
        id: 3,
        name: 'Strawberry',
        price: 5,
        image: 'https://beamingbaker.com/wp-content/uploads/2020/06/IGT1-Best-Strawberry-Vegan-Ice-Cream-Dairy-Free-1.jpg',
    },
    {
        id: 4,
        name: 'Pistacio',
        price: 6,
        image: 'https://www.simplyscratch.com/wp-content/uploads/2020/03/No-Churn-Pistachio-Ice-Cream-l-SimplyScratch.com-nochurn-icecream-pistachio-nut-easy-dessert-29-scaled.jpg',
    },
]

let toppings = [
    {
        id: 1,
        name: 'Sprinkles',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 2,
        name: 'Chocolate Chips',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 3,
        name: 'M&Ms',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 4,
        name: 'Berries',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
]

let cart = []
let total = 0



function drawCones() {
    let template = ''
    
    for (let i = 0; i < cones.length; i++) {
        const item = cones[i];
        template += `
        <div class="col-6 bg-light selectable p-0 menu-item" onclick="addCone(${item.id})">
            <img class="img-fluid" src="${item.image}" alt="">
            <div class="d-flex justify-content-between p-2">
                <h6 class="mb-2">${item.name}</h6>
                <p class="mb-2">$${item.price}</p>
            </div>
        </div>
        `
    }
    document.getElementById('options').innerHTML = template
}

function drawIceCreams() {
    let template = ''
    
    for (let i = 0; i < iceCreams.length; i++) {
        const item = iceCreams[i];
        template += `
        <div class="col-6 bg-light selectable p-0 menu-item" onclick="addIceCream(${item.id})">
            <img class="img-fluid" src="${item.image}" alt="">
            <div class="d-flex justify-content-between p-2">
                <h6 class="mb-2">${item.name}</h6>
                <p class="mb-2">$${item.price}</p>
            </div>
        </div>
        `
    }

    template += `<button id="iceCreamButton" class="btn btn-dark w-100 text-light p-2" onclick="skipIceCream()">Next</button>`
    
    document.getElementById('options').innerHTML = template
}

function drawToppings() {
    let template = ''
    
    for (let i = 0; i < toppings.length; i++) {
        const item = toppings[i];
        template += `
        <div class="col-6 bg-light selectable p-0 menu-item" onclick="addTopping(${item.id})">
            <img class="img-fluid" src="${item.image}" alt="">
            <div class="d-flex justify-content-between p-2">
                <h6 class="mb-2">${item.name}</h6>
                <p class="mb-2">$${item.price}</p>
            </div>
        </div>
        `
    }
    document.getElementById('options').innerHTML = template
}

function drawCart() {
    let template = ''
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        template += `
        <div class="col-12">
            <div class="d-flex justify-content-between p-1">
                <h2>${item.name}</h2>
                <h2>$${item.price}</h2>
            </div>
        </div>
        `
    }
    document.getElementById('cart').innerHTML = template
    document.getElementById('total').innerText = total.toFixed(2)
    document.getElementById('checkout').disabled = total <= 1
}



function addCone(findCone) {
    console.log('addCone Works');
    
    let itemToAdd = cones.find(ci => ci.id == findCone)
    cart.push(itemToAdd)

    
    total += itemToAdd.price
    drawIceCreams()
    drawCart()
    
}

function addIceCream(findIceCream) {
    console.log('addIceCream Works');

    let itemToAdd = iceCreams.find(ci => ci.id == findIceCream)
    cart.push(itemToAdd)

    
    total += itemToAdd.price
    drawCart()
}
function skipIceCream() {
    drawToppings()
}

function addTopping(findTopping) {
    console.log('addTopping Works');
    
    let itemToAdd = toppings.find(ci => ci.id == findTopping)
    cart.push(itemToAdd)

    
    total += itemToAdd.price
    drawCart()
}



function checkout() {
    alert('Thank you!!')
    cart = []
    total = 0
    drawCones()
    drawCart()
}



drawCones()
drawCart()