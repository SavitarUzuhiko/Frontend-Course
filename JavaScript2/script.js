const btn = document.querySelector('.btn');
const img = document.querySelector('.img');

btn.addEventListener('click' , ()=>{
    if (img.classList.contains('opa')) {
        img.classList.remove('opa');
        btn.textContent='Hide';
    }else{
        img.classList.add('opa');
        btn.textContent='Show';
    }
} )