const form = document.querySelector('form');
const imgbox = document.querySelector('.imgbox');
const p = document.querySelector('.p');
const input = document.querySelector('input');


function imageGenerator(txt, cmd , rmd,way){
    p.textContent = `${txt}`;
    p.classList.add(`${cmd}`);
    p.classList.remove(`${rmd}`);
    imgbox.innerHTML = `<img class="img" src=${way} alt="Tom Kruz">`
    if(cmd == 'red'){
    p.classList.add('animate');
    setTimeout(() => {
        p.classList.remove('animate');
    } , 1000);}
}

form.addEventListener('submit' , (x)=>{
    let query = Number(input.value);
    if(query === 61){
        imageGenerator("To'g'ri javob",'green','red',"img/tom-cruise-great.jpeg");
    }else if(query>61) {
        imageGenerator("Noto'gri javob / Kichikroq yosh kiriting",'red','green',"img/tom-cruise-old.jpeg");
    }else if(query<61 && query>0) {
        imageGenerator("Noto'gri javob / Kattaroq yosh kiriting",'red','green',"img/tom-cruise-kid.jpeg");
    }else{
        imageGenerator("Aldamang",'red','green',"img/wag-finger-baby.gif");
    }

    x.preventDefault();
})