let currentColors = {
    color: 'white',
    color1: 'white',
    color2: 'white',
    color3: 'white',
};

$(document).ready(function () {
    var h = parseInt($('#height').val());
    var w = parseInt($('#width').val());
    var r = parseInt($('#radius').val());

    pattern(w, h, r, currentColors).then(function (img) {
        $('#output').html(img);
    });
});

const predefinedPalletesDiv = document.getElementById('predefined-palletes');

let predefinedPalletes = [
    {
        name: 'Abhigyan',
        color: '#1d1b1b',
        color1: '#620e0e',
        color2: '#931a1a',
        color3: '#420000',
    },
    {
        name: 'Priyanka',
        color: '#042464',
        color1: '#052856',
        color2: '#0a4f92',
        color3: '#177ace',
    },
    {
        name: 'Priyanka',
        color: '#682b69',
        color1: '#ac64ac',
        color2: '#a183a5',
        color3: '#ccb9ce',
    },
    {
        name: 'Priyanka',
        color: '#0e1926',
        color1: '#5a666f',
        color2: '#8f9aa2',
        color3: '#cde1f0',
    },
    {
        name: 'Priyanka',
        color: '#51241d',
        color1: '#9d5b52',
        color2: '#db9787',
        color3: '#f3bfb0',
    },
    {
        name: 'Parwaaz',
        color: '#ba8759',
        color1: '#c95a47',
        color2: '#c96045',
        color3: '#9f817a',
    },
    {
        name: 'Kartikeyan',
        color: '#363bd3',
        color1: '#12e8f8',
        color2: '#310566',
        color3: '#f81229',
    },
    {
        name: 'Kartikeyan',
        color: '#03a516',
        color1: '#65620b',
        color2: '#310566',
        color3: '#dfef06',
    },
    {
        name: 'Kartikeyan',
        color: '#fbed2d',
        color1: '#650b5e',
        color2: '#37d2b8',
        color3: '#8d9190',
    },
    {
        name: 'Tushar',
        color: '#dd5f5f',
        color1: ' #245f60',
        color2: ' #adc752',
        color3: ' #d6df53',
    },
];

for (const pallete of predefinedPalletes) {
    const newPallete = document.createElement('div');
    newPallete.className = 'pallete';
    newPallete.dataset.pallete = JSON.stringify(pallete);
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = pallete.color;
    const colorDiv1 = document.createElement('div');
    colorDiv1.style.backgroundColor = pallete.color1;
    const colorDiv2 = document.createElement('div');
    colorDiv2.style.backgroundColor = pallete.color2;
    const colorDiv3 = document.createElement('div');
    colorDiv3.style.backgroundColor = pallete.color3;
    [colorDiv, colorDiv1, colorDiv2, colorDiv3].forEach(div =>
        newPallete.appendChild(div)
    );
    predefinedPalletesDiv.appendChild(newPallete);
}

document.getElementById('predefined-palletes').addEventListener('click', e => {
    if (e.target.parentElement.parentElement === predefinedPalletesDiv) {
        currentColors = JSON.parse(e.target.parentElement.dataset.pallete);
        for(let key in currentColors) {
            if (key !== 'name') {
                console.log(key);
                document.getElementById(key).setAttribute('value', currentColors[key]);
                document.getElementById(key).nextElementSibling.innerText = currentColors[key];
            }
        }
    }
    draw2();
});

document.getElementById('custom-pallete').addEventListener('change', e => {
    e.target.nextSibling.nextSibling.innerText = e.target.value;
    currentColors[e.target.name] = e.target.value;
    draw2();
});

var loading = document.querySelector('#loading')

async function draw2(w, h) {
    var h = parseInt($('#height').val());
    var w = parseInt($('#width').val());
    var r = parseInt($('#radius').val());
    var img = await pattern(w, h, r, currentColors);
    $('#output').html(img);
}
