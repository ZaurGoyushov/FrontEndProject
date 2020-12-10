//
function ClickEvent(){
    console.log("Hello World")
}
let nextBtn=document.querySelector(".btn-next");
let prevBtn=document.querySelector(".btn-prev");
let slider=document.querySelector('.slider-items');
a=1;
nextBtn.addEventListener("click",function(){
    
    a+=600;
    slider.style.left=a+'px';
})

prevBtn.addEventListener("click",function(){
    
    a-=600;
    slider.style.left=a+'px';
})

// x=1
// setInterval(function(){
// var randX=Math.floor(Math.random()*1000);
// var randY=Math.floor(Math.random()*1000);
// console.log(randX,randY)
// let div=document.createElement("div")
// div.className="circle";
// div.style.left=randX+'px'
// div.style.top=randY+'px'
// document.body.appendChild(div)
// },100)