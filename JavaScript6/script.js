const img0 = document.querySelector('.i0');
const img1 = document.querySelector('.i1');
const img2 = document.querySelector('.i2');

const gen = document.querySelector('.gen_img');

function remove(){
    img0.classList.remove('checked');
    img1.classList.remove('checked');
    img2.classList.remove('checked');
}

img0.addEventListener('click' , () => {
    remove()
    gen.src= 'images/redmi_note13_1.jpeg';
    img0.classList.add('checked');
})
img1.addEventListener('click' , () => {
    remove()
    gen.src= 'images/redmi_note13_2.jpeg';
    img1.classList.add('checked');
})
img2.addEventListener('click' , () => {
    remove()
    gen.src= 'images/redmi_note13_3.jpeg';
    img2.classList.add('checked');
})

const big = document.querySelector('.big');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');

c1.addEventListener('click' , () => {
    big.style.backgroundColor = "dodgerblue";
})
c2.addEventListener('click' , () => {
    big.style.backgroundColor = "#444";
})
c3.addEventListener('click' , () => {
    big.style.backgroundColor = "forestgreen";
})
c4.addEventListener('click' , () => {
    big.style.backgroundColor = "#f0bc7d";
})

let i = 1
const min = document.querySelector('.min');
const num = document.querySelector('.num');

function multiply(){
    ++i;
    num.textContent = i;
    min.classList.remove('notpoint');
}

function reduce(){
    if(i>1){
        --i;
        num.textContent = i;
        min.classList.remove('notpoint');
    }
    if(i===1){
        min.classList.add('notpoint');
    }

}

const b0 = document.querySelector('.b0');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');

function removebtn(){
    b0.classList.remove('checked');
    b1.classList.remove('checked');
    b2.classList.remove('checked');
}

b0.addEventListener('click' , () => {
    removebtn()
    b0.classList.add('checked');
})
b1.addEventListener('click' , () => {
    removebtn()
    b1.classList.add('checked');
})
b2.addEventListener('click' , () => {
    removebtn()
    b2.classList.add('checked');
})