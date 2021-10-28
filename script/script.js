"use strict"
const countValue=document.querySelector('h1');
const countValueStyle = countValue.style;
const btnGroup = document.querySelectorAll('button');
let count = 0;
btnGroup.forEach(val=>{
    val.addEventListener('click',(e)=>{
        const{innerText} = e.target;
        (innerText==='+')?count++:(innerText==='-')?count--:count=0;
        (count>0)?countValueStyle.color='green':(count<0)?countValueStyle.color='red':countValueStyle.color='#ffc107';
        countValue.innerText=count;
    });
});
