/** ~~~~~~~~~~~~~~~~~~~~ 2-Uniform tiling : 10 Pattern Function ~~~~~~~~~~~~~~~~~~~~
 * This function will create a generative
 * @param {int} w - Width of canvas
 * @param {int} h - Height of canvas
 * @param {int} r - Radius value
 * @param {hex} color -color
 */

const pattern = async function (w, h, r, colors) {
    let parent = document.getElementById('output');
    if (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }

    const canvas = document.createElement('canvas');
    document.getElementById('output').appendChild(canvas);
    const ctx = canvas.getContext('2d');
    // var c = document.getElementById('checkbox');
    canvas.height = parseInt(h);
    canvas.width = parseInt(w);
    ctx.strokeStyle = '#000000';
    var r = parseInt(r);

    const { color, color1, color2, color3 } = colors;

    //Applying Colors:
    // if (c.checked == true) {
    //     color = '#008c76ff';
    //     color1 = '#f9a12eff';
    //     color2 = '#f9a12eff';
    //     color3 = '#ae0e36ff';
    // } else {
    //     color = 'white';
    //     color1 = 'white';
    //     color2 = 'white';
    // }

    // Algorithm: Upper Hexagon
    function draw(radius, val1, val2) {
        const a = (2 * Math.PI) / 6;
        var x = val1;
        var y = val2;
        var r = radius;
        ctx.fillStyle = color;

        ctx.beginPath();
        for (var i = 0; i < 6; i++) {
            ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        for (var i = 0; i < 6; i++) {
            ctx.moveTo(x, y);
            ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
        }
        ctx.closePath();
        ctx.stroke();

        // finding length of side of the hexagon
        var dist = Math.sqrt(
            Math.pow(x + r * Math.cos(a * 5) - x + r * Math.cos(a * 0), 2) +
                Math.pow(y + r * Math.sin(a * 5) - y + r * Math.sin(a * 1), 2)
        );

        ctx.fillStyle = color2;
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(a * 5), y + r * Math.sin(a * 5));
        ctx.lineTo(x + dist, y + r * Math.sin(a * 5));
        ctx.lineTo(x + r * Math.cos(a * 0), y + r * Math.sin(a * 0));
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = color1;
        ctx.beginPath();
        ctx.moveTo(x + r * Math.cos(a * 0), y + r * Math.sin(a * 0));
        ctx.lineTo(
            x + r * Math.cos(a * 0) + (2 * dist) / 3,
            y + r * Math.sin(a * 0)
        );
        ctx.lineTo(x + dist, y + r * Math.sin(a * 5));
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = color2;
        ctx.beginPath();
        ctx.moveTo(x + dist, y + r * Math.sin(a * 5));
        ctx.lineTo(x + 2.5 * ((2 * dist) / 3), y + r * Math.sin(a * 5));
        ctx.lineTo(
            x + r * Math.cos(a * 0) + (2 * dist) / 3,
            y + r * Math.sin(a * 0)
        );
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }

    // Algorithm: Lower Hexagon
    function draw1(radius, val1, val2) {
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            const a = (2 * Math.PI) / 6;
            var x = val1;
            var y = val2;
            var r = radius;
            ctx.fillStyle = color3;
            ctx.beginPath();
            for (var i = 0; i < 6; i++) {
                ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            for (var i = 0; i < 6; i++) {
                ctx.moveTo(x, y);
                ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
            }
            ctx.closePath();
            ctx.stroke();

            var dist = Math.sqrt(
                Math.pow(x + r * Math.cos(a * 5) - x + r * Math.cos(a * 0), 2) +
                    Math.pow(
                        y + r * Math.sin(a * 5) - y + r * Math.sin(a * 1),
                        2
                    )
            );

            ctx.fillStyle = color1;
            ctx.beginPath();
            ctx.moveTo(x + r * Math.cos(a * 0), y + r * Math.sin(a * 0));
            ctx.lineTo(x + dist, y + r * Math.sin(a * 1));
            ctx.lineTo(x + r * Math.cos(a * 1), y + r * Math.sin(a * 1));
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = color1;
            ctx.beginPath();
            ctx.moveTo(x + dist, y + r * Math.sin(a * 1));
            ctx.lineTo(x + 2.5 * ((2 * dist) / 3), y + r * Math.sin(a * 1));
            ctx.lineTo(
                x + r * Math.cos(a * 0) + (2 * dist) / 3,
                y + r * Math.sin(a * 0)
            );
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = color2;
            ctx.beginPath();
            ctx.moveTo(x + r * Math.cos(a * 0), y + r * Math.sin(a * 0));
            ctx.lineTo(
                x + r * Math.cos(a * 0) + (2 * dist) / 3,
                y + r * Math.sin(a * 0)
            );
            ctx.lineTo(x + dist, y + r * Math.sin(a * 1));
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
    // Main Function: To draw the generative
    function draw2(w, h) {
        ctx.clearRect(0, 0, w, h);

        r = r;
        val1 = r;
        val2 = r;

        var n = parseInt(h);
        var m = parseInt(w);
        for (let j = 0; j < n - 1; j++) {
            for (let i = 0; i < m; i++) {
                if (i % 2 == 0 && j % 2 == 0) {
                    draw(r, val1, val2);
                } else if (i % 2 == 0 && j % 2 != 0) {
                    draw1(r, val1, val2);
                } else if (i % 2 != 0 && j % 2 == 0) {
                    draw1(r, val1, val2);
                } else if (i % 2 != 0 && j % 2 != 0) {
                    draw(r, val1, val2);
                }
                val1 += r + 2 * r;
            }
            val1 = r;
            val2 += (2 * r * Math.sqrt(3)) / 2;
        }
    }
    // Calling function
    draw2(w, h);
    //Returning Generated Pattern
    const tempImg = new Image();
    tempImg.src = canvas.toDataURL();
    return tempImg;
};
