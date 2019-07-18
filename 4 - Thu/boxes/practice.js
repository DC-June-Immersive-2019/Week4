
const el = document.createElement('div');
el.classList.add('box');
const container = document.querySelector('.box-container');
container.appendChild(el);

const boxes = document.querySelectorAll('.box');
boxes.forEach( (box) => {
    box.addEventListener('click',(e)=>{
        const currentBG = e.target.style.backgroundColor;
        console.log(currentBG);
        e.target.style.backgroundColor = 
            (currentBG==='orange') ? '#bada55':
            (currentBG==='lavender') ? 'orange' : 'lavender';
    });
});
