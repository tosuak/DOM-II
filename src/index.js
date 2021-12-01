import './less/index.less'

// Your code goes here!
const topHeader = document.querySelector('.intro h2');
const Img = document.querySelector('.intro img');
const midImg1 = document.querySelector('.img-content img')
const midImg2 = midImg1.nextElementSibling;

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

midImg2.addEventListener('click', zoom);

const animateImg = () => {
midImg1.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-300px)' }
  ], {
    duration: 1000,
    iterations: Infinity
  })
  midImg2.animate([
    { transform: 'translateY(300px)' },
    { transform: 'translateY(0px)' }
  ], {
    duration: 1000,
    iterations: Infinity
  })
}
midImg1.addEventListener('click', animateImg);
midImg2.addEventListener('click', animateImg);