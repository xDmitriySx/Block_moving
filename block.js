const block = document.querySelector('#block')
function start(event) {
document.addEventListener('mousemove', posit)};


block.addEventListener(`mousedown`,start);
function posit(event) {
	block.style.left=event.pageX-block.offsetWidth/2+`px`;
    block.style.top=event.pageY-block.offsetHeight/2+`px`
};

function end(event) {
document.removeEventListener('mousemove', posit)
};

block.addEventListener('mouseup', end);






const cilinder = document.querySelector('#cilinder')
function start1(event) {
document.addEventListener('mousemove', posit1)};


cilinder.addEventListener(`mousedown`,start1);
function posit1(event) {
	cilinder.style.left=event.pageX-cilinder.offsetWidth/2+`px`;
    cilinder.style.top=event.pageY-cilinder.offsetHeight/2+`px`
};

function end1(event) {
document.removeEventListener('mousemove', posit1)
};

cilinder.addEventListener('mouseup', end1);

