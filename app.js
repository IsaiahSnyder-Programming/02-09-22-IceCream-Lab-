console.log('app.js Working');

let currentOrder = {}


let cones = [
    {
        id: 1,
        name: 'Waffle',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 2,
        name: 'Plate',
        price: 2,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 3,
        name: 'Lite',
        price: 3,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 4,
        name: 'Kids',
        price: 4,
        image: '//thiscatdoesnotexist.com/',
    },
]

let iceCreams = [
    {
        id: 1,
        name: 'Vanilla',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 2,
        name: 'Chocolate',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 3,
        name: 'Strawberry',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
    },
    {
        id: 4,
        name: 'Pistacio',
        price: 1,
        image: '//thiscatdoesnotexist.com/',
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


let orders = [
    {
        name: 'Jake',
        cone: cones[0],
        iceCream: iceCreams[3],
        topping: toppings[0]
    }
]



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
    document.getElementById('cones').innerHTML = template
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
    document.getElementById('iceCreams').innerHTML = template
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
    document.getElementById('toppings').innerHTML = template
}



function drawCart() {
    console.log('drawCart Works');
}



function addCone(cone) {
    console.log('addCone Works');
    // TODO pass param to identify the cone
    // find the correct cone by the param
    // set the currentOrder.cone to found cone
    currentOrder.cone = 'test'
    // validate the order
}
function addIceCream() {
    console.log('addIceCream Works');
    // validate the order
}
function addTopping() {
    console.log('addTopping Works');
    // validate the order
}


function validateOrder() {
}




drawCones()
drawIceCreams()
drawToppings()