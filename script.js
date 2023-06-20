let dash =document.querySelector(".dash")
let span =document.querySelectorAll("span")
let value =document.querySelector(".value")
let light =document.querySelector(".light")
let body=document.querySelector("body")
for(let i=0; i<span.length;i++){
    span[i].addEventListener("click",function(){
        if(this.innerHTML=="="){
            value.innerHTML=eval(value.innerHTML)
        }
        else{
            if(this.innerHTML=="Clear"){
                value.innerHTML=""
            }
            else{
                value.innerHTML+=this.innerHTML
            }
        }
    })
}
light.onclick=function(){
    body.classList.toggle("dark")
}
