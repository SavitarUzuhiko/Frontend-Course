const icon = document.querySelector('.fa-person-dress');
const img = document.querySelector('.img');
const btn = document.querySelector('.btn');

btn.addEventListener('click' , () => {
    if (btn.classList.contains('btn1')){
        btn.textContent = 'Show man' ;
        btn.className = 'btn';
        icon.className = 'fa-solid fa-person-dress';
        img.src = '143313-Khyzyl-Saleem-car-render.jpg';
    }else{
        btn.textContent = 'Show woman' ;
        btn.className = 'btn btn1';
        icon.className = 'fa-solid fa-person';
        img.src = '919439.jpg';
        icon.style.bac
    }
});