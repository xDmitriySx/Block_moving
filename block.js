//tut budet comit
 

function foo(a){
function begin(event){
	
	a.setAttribute(`onselectstart`,`return false`);
	a.style.position=`absolute`;
	a.style.zIndex = 1000;// эта строчка нужна, что б див показывался над всеми остальными элемнетами
	
	document.addEventListener(`mousemove`,midel)


};a.addEventListener(`mousedown`,begin);
function midel(event){a.style.left=event.pageX-a.offsetWidth/2+`px`;
a.style.top=event.pageY-a.offsetHeight/2+`px`
};



function end(event){a.style.backgroundColor=``;
	document.removeEventListener(`mousemove`,midel);
};
a.addEventListener(`mouseup`,end);}
foo(document.querySelector('#block'));



foo(document.querySelector(`#triangle`)); /*это для полета других фигур*/

foo(document.querySelector(`#cilinder`));


/*const block = document.querySelector('#block')
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
*/

/*



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
*/
