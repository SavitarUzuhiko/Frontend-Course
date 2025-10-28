const form = document.querySelector('form');

const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');

const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const span4 = document.querySelector('.span4');

form.addEventListener("submit" , (x) => {
    
    x.preventDefault()
    
    let val1 = num1.value   ;
    let val2 = Number(num2.value);

    console.log(val1);
    console.log(val2);
    span1.textContent = `Yig'indi: ${val1 + val2}`;
    span2.textContent = `Ayirma: ${val1 - val2}`;
    span3.textContent = `Bo'linma: ${val1 / val2}`;
    span4.textContent = `Ko'paytma: ${val1 * val2}`;
     
    num1.value = '';
    num2.value = '';
});