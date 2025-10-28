const button1 = document.querySelector('.btn');
const button2 = document.querySelector('.btn1');
const all = document.querySelector('.big');
const img = document.querySelector('img');
const p = document.querySelector('p');

button1.addEventListener('click' , () => {
    button1.classList.add('other');
    button1.textContent = 'Clicked';
    button2.textContent = 'Button2';
    button2.classList.remove('other');
    all.classList.add('yellow');
    p.classList.add('p');
    img.classList.add('image');
    
})
button2.addEventListener('click' , () => {
    button2.classList.add('other');
    button2.textContent = 'Clicked';
    button1.textContent = 'Button1';
    button1.classList.remove('other');
    all.classList.remove('yellow');
    p.classList.remove('p');
    img.classList.remove('image');
})