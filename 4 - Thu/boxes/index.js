
const colors = ['red','green','blue','yellow'];

const randNum = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandColor=() => {
    return `rgb(${randNum(254)},${randNum(254)},${randNum(254)})`;
}

const removeBox = (e) => { e.target.remove(); };
const moveBox = (el) => {
    el.style.left = `${randNum(549)}px`;
    el.style.top = `${randNum(349)}px`;
    el.style.backgroundColor = getRandColor();
};

const createBox = (x=randNum(300), y=randNum(400), color=getRandColor()) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.left=`${x}px`;
    box.style.top=`${y}px`;
    box.style.backgroundColor = color;
    box.style.zIndex = randNum(19);
    box.addEventListener('click', removeBox);
    box.addEventListener('mouseover', (e) => moveBox(e.target) );
    return box;
};

const handleClick = () => {
    const x = document.querySelector('[name="x"]').value;
    const y = document.querySelector('[name="y"]').value;
    const c = document.querySelector('[name="color"]').value;
 
    if ((x>550 || x<0) || (y>350 || y<0)) {
        alert('Invalid entries');
        return;
    }
    const boxContainer = document.querySelector('.box-container');
    const box = createBox(x,y,c);
    boxContainer.appendChild(box);
};

const start = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', handleClick);
    setInterval( ()=>{
        const boxes = document.querySelectorAll('.box');
        boxes.forEach( (box) => moveBox(box) );
    }, 3000);
};

document.addEventListener('DOMContentLoaded', start);
