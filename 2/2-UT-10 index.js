let colors = {
    color: 'white',
    color1: 'white',
    color2: 'white',
    color3: 'white',
}

$(document).ready(function () {
    var h = parseInt($('#height').val());
    var w = parseInt($('#width').val());
    var r = parseInt($('#radius').val());

    pattern(w, h, r, colors).then(function (img) {
        $('#output').html(img);
    });
});

document.getElementById('custom-pallete').addEventListener('change', e => {
    e.target.nextSibling.nextSibling.innerText = e.target.value;
    colors[e.target.name] = e.target.value;
    draw2();
});

function draw2(w, h) {
    var h = parseInt($('#height').val());
    var w = parseInt($('#width').val());
    var r = parseInt($('#radius').val());
    pattern(w, h, r, colors).then(function (img) {
        $('#output').html(img);
    });
}
