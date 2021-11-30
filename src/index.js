import './less/index.less'

// Your code goes here!
const topHeader = document.querySelector('.intro h2');
const topImg = document.querySelectorAll('button');

const mouseOver = (evt) => {
    evt.target.style.color = 'red';
}

topHeader.addEventListener('mouseover', mouseOver);

const doubleClick = (evt) => {
    evt.target.style.color = 'green';
};

topImg.addEventListener('mouseover', doubleClick);
