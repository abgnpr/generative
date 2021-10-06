class Design {
    static container = document.querySelector('#pattern-container');
    constructor(height, width) {
        this.canvas = document.createElement('canvas');
        this.canvas.height = height;
        this.canvas.width = width;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.strokeStyle = 'white';
    }
    show() {
        let img = new Image();
        img.src = this.canvas.toDataURL();
        let div = document.createElement('div');
        div.appendChild(img);
        div.classList.add('pattern-slide', 'swiper-slide');
        Design.container.appendChild(div);
    }
}
class Design1 extends Design {
    constructor(height, width, space) {
        super(height, width);
        this.space = space;
        this.generate();
    }
    rightDiagonal(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + this.space, y + this.space);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    leftDiagonal(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + this.space, y);
        this.ctx.lineTo(x, y + this.space);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    generate() {
        for (let x = 0; x < this.canvas.width; x += this.space)
            for (let y = 0; y < this.canvas.height; y += this.space)
                Math.round(Math.random()) // 0 or 1
                    ? this.rightDiagonal(x, y)
                    : this.leftDiagonal(x, y);
    }
}
class Design2 extends Design {
    constructor(height, width, hSpace, vSpace) {
        super(height, width);
        this.hSpace = hSpace;
        this.vSpace = vSpace;
        this.generate();
    }
    horizontalLineAt(y) {
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([
            0.6 * this.hSpace,
            0.1 * this.hSpace,
            0.1 * this.hSpace,
            0.1 * this.hSpace,
        ]);
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(this.canvas.width, y);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    verticalLinesAt(y) {
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([]);
        for (
            let x = 0.75 * this.hSpace;
            x < this.canvas.width;
            x += 0.9 * this.hSpace
        ) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + 0.2 * this.vSpace);
            this.ctx.lineTo(x, y + 0.8 * this.vSpace);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
    generate() {
        let n = 1;
        for (let y = 0; y < this.canvas.height; y += this.vSpace) {
            this.horizontalLineAt(y);
            if (n % 3 != 0) this.verticalLinesAt(y);
            n++;
        }
    }
}
class Design3 extends Design {
    constructor(height, width, space) {
        super(height, width);
        this.space = space;
        this.ctx.lineWidth = 1;
        this.generate();
    }
    leftShuriken(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + 0, y + 0.25 * this.space);
        this.ctx.lineTo(x + 0.75 * this.space, y + 0.25 * this.space);
        this.ctx.moveTo(x + 0.75 * this.space, y + 0);
        this.ctx.lineTo(x + 0.75 * this.space, y + 0.75 * this.space);
        this.ctx.moveTo(x + this.space, y + 0.75 * this.space);
        this.ctx.lineTo(x + 0.25 * this.space, y + 0.75 * this.space);
        this.ctx.moveTo(x + 0.25 * this.space, y + this.space);
        this.ctx.lineTo(x + 0.25 * this.space, y + 0.25 * this.space);
        this.ctx.stroke();
    }
    rightShuriken(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + this.space, y + 0.25 * this.space);
        this.ctx.lineTo(x + 0.25 * this.space, y + 0.25 * this.space);
        this.ctx.moveTo(x + 0.25 * this.space, y + 0);
        this.ctx.lineTo(x + 0.25 * this.space, y + 0.75 * this.space);
        this.ctx.moveTo(x + 0, y + 0.75 * this.space);
        this.ctx.lineTo(x + 0.75 * this.space, y + 0.75 * this.space);
        this.ctx.moveTo(x + 0.75 * this.space, y + this.space);
        this.ctx.lineTo(x + 0.75 * this.space, y + 0.25 * this.space);
        this.ctx.stroke();
    }
    generate() {
        for (let y = 0, i = 1; y < this.canvas.height; y += this.space, ++i)
            for (
                let x = 0, j = i % 2 == 0 ? 1 : 2;
                x < this.canvas.width;
                x += this.space, ++j
            )
                j % 2 == 0 ? this.leftShuriken(x, y) : this.rightShuriken(x, y);
    }
}

new Design3(300, 485, 100).show();
new Design3(300, 485, 20).show();
new Design2(300, 485, 100, 100).show();
new Design2(300, 485, 10, 10).show();
new Design1(300, 485, 100).show();
new Design1(300, 485, 20).show();


/* 

class Design4 extends Design {
    constructor(height, width, otherParams...) {
        super(height, width);
        // ...your intitialization here...
        this.generate();
    }
    generate() {
        // ...write code to generate pattern usig 'this.ctx'...
        // sample code to draw a diagonal
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

*/

// new Design4(height, width, otherParams...).show(); // automatically adds your pattern as a slide