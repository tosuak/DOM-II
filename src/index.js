import './less/index.less'

// Your code goes here!
const topHeader = document.querySelector('.intro h2');
const Img = document.querySelector('.intro img');
const midImg = document.querySelector('.img-content img')


const mouseOver = (evt) => {
    evt.target.style.color = 'red';
    topHeader.textContent = 'The Fun Bus is RED!';
}

topHeader.addEventListener('mouseover', mouseOver);

const doubleClick = () => {
    Img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5pVKEbt76K2A5zmrRmNzEwEXHkruNkDNaA&usqp=CAU';
}

Img.addEventListener('dblclick', doubleClick);

const wheel = () => {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'lime';
}

document.addEventListener('wheel', wheel);

const zoom = () => {
   document.body.style.scale = 2;
}

midImg.addEventListener('click', zoom);

// const focus = () => {
//     document. = '';
// }

// midImg.addEventListener('mouseover', blur)
