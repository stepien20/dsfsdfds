const but1=document.querySelector(`#but1`)
but1.addEventListener(`click`,function(cos){
    cos.preventDefault()
    fun1();
})

function fun1(){
const element=document.querySelector(`#element`).value
console.log(element);
const text=document.querySelector(`#text`).value
const date=document.querySelector(`#date`).value
const margin=document.querySelector(`#margin`).value
const dlug=document.querySelector(`#dlug`).value
const padding=document.querySelector(`#padding`).value
const color=document.querySelector(`#font_color`).value
const back_color=document.querySelector(`#back_color`).value
const text_allign=document.querySelector(`[type="radio"]:checked`).value
console.log(text_allign)
const ozdoba=document.querySelectorAll(`[name="ozdoba"]`)
console.log(ozdoba)
const display=document.querySelector(`#display`)

const elem=document.createElement(element);
elem.innerText=text
console.log(elem)
display.appendChild(elem)
elem.style.padding=padding+"rem"
elem.style.margin=margin+"rem"
elem.style.letterSpacing=dlug+"rem"
elem.style.color=color
elem.style.backgroundColor=back_color
let string="";
for (let i=0;i<ozdoba.length;i++){
    if(ozdoba[i].checked){string+=ozdoba[i].value+" "}
}
elem.style.textDecoration=string;
elem.innerText+=` W elemencie ${element} utworzony: ${date}`
elem.style.textAlign=text_allign
}