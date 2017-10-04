const speed = 150;
const lines = [
    [
        'Happy', 'Birthday', 'Ewa!'
    ],
    [
        'Loads', 'of', 'yerba'
    ],
    [
        'cats'
    ],
    [
        'and', 'horses'
    ],
    [
        ';)'
    ]
];
const dev = 'Hello';
/*
  mapping through words: for(let l of word)
*/
//Add 17 in the bg(when page loads-in) 
let int;
let [x, y, z] = [0, 0, 0];
/*
x: sub-array
y: word
z: letter
*/
const size = lines.reduce((prev, currv, i) => {
    return prev += currv.length;
}, 0);
let bgColor = '#00ffff';
const out = document.querySelector('.text');
const back = document.querySelector('.back');
let backStyle = [
    `--back-text-height:${size}`,
    `--bg-color:${bgColor}`
];
function upStyle() {
    backStyle = [
        `--back-text-height:${size}`,
        `--bg-color:${bgColor}`
    ];
    back.setAttribute('style', backStyle.join('; '));
}
function radnColor() {
    const randC = function () {
        return Math.floor(Math.random() * 150) + 100;
    };
    const [r, g, b] = [randC(), randC(), randC()];
    return `rgb(${r},${g},${b})`;
}
function write() {
    if (x > lines.length - 1) {
        clearInterval(int);
        return;
    }
    if (y > lines[x].length - 1) {
        ++x;
        y = 0;
        //back.innerHTML = ''
    }
    if (z > lines[x][y].length - 1) {
        out.innerHTML = '';
        const el = document.createElement('span');
        back.appendChild(el);
        el.innerHTML = lines[x][y];
        ++y;
        z = 0;
    }
    else {
        bgColor = radnColor();
        upStyle();
        out.innerHTML = '';
        const el = document.createElement("span");
        out.appendChild(el);
        el.innerHTML = lines[x][y][z];
        console.log(x, y, z);
        z++;
    }
}
window.addEventListener('DOMContentLoaded', () => { int = setInterval(write, speed); });
