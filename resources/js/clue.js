let initObjects = function() {
    Object.size = function(obj) {
        let size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    let items = {
        people: [
            'Green',
            'Mustard',
            'Peacock',
            'Plum',
            'Scarlet',
            'White'
        ],
        weapons: [
            'Candlestick',
            'Dagger',
            'Pistol',
            'Lead Pipe',
            'Rope',
            'Wrench'
        ],
        rooms: [
            'Bathroom',
            'Bedroom',
            'Courtyard',
            'Dining Room',
            'Billiard Room',
            'Garage',
            'Kitchen',
            'Living Room',
            'Office'
        ]
    }

    for (let type = 0; type < Object.size(items); type++){
        let currentType = Object.keys(items)[type];
        let container = document.getElementById(currentType + '-container');
        for (let item = 0; item < items[currentType].length; item++) {
            let row = document.createElement('div');
            row.classList.add('row');

            let btn = document.createElement('button');
            btn.classList.add('btn', 'btn-secondary');
            btn.type = 'button';
            btn.setAttribute('data-current', '');
            btn.innerText = items[currentType][item];
            row.appendChild(btn);

            // let dash = document.createElement('p');
            // dash.classList.add('dash');
            // dash.innerText = '-';
            // row.appendChild(dash);

            // let itemName = document.createElement('p');
            // itemName.innerText = items[currentType][item];
            // row.appendChild(itemName);

            container.appendChild(row);
        }
    }
}();


let initButtons = function() {
    let btns = document.getElementsByClassName('btn');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function(e) {
            cycleBtn(this);
        });
    }
}()

let cycleBtn = function(btn) {
    let stateOrder = ['', 'x', '?', 'check'];
    let classOrder = ['btn-secondary', 'btn-danger', 'btn-warning', 'btn-success'];
    let currentState = btn.getAttribute('data-current');
    let stateIndex = stateOrder.indexOf(currentState);
    let advancement = 1;
    if (stateIndex >= stateOrder.length - 1) {
        advancement = -(stateOrder.length) + 1;
    } else {
        advancement = 1
    }
    btn.classList.remove(classOrder[stateIndex])
    btn.classList.add(classOrder[stateIndex + advancement])
    btn.setAttribute('data-current', stateOrder[stateIndex + advancement])
}

