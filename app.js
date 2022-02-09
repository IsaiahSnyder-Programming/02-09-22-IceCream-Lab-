console.log('app.js Working');

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



function drawMenu(cones) {
    let template = ''
    
    for (let i = 0; i < cones.length; i++) {
        const item = cones[i];
        template += `
        <div class="col-6 bg-light selectable p-0 menu-item" onclick="addItem(${item.id})">
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

function drawMenu(iceCreams) {
    let template = ''
    
    for (let i = 0; i < iceCreams.length; i++) {
        const item = iceCreams[i];
        template += `
        <div class="col-6 bg-light selectable p-0 menu-item" onclick="addItem(${item.id})">
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

function drawMenu(toppings) {
    let template = ''
    
    for (let i = 0; i < toppings.length; i++) {
        const item = toppings[i];
        template += `
        <div class="col-6 bg-light selectable p-0 menu-item" onclick="addItem(${item.id})">
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





function addItem() {
    console.log("addItem Works");
}

drawMenu()