let a=50;
document.querySelector(".btn").addEventListener('click',function(){
    // let box=document.createElement("div")
    // box.className="box"
    // a++
    // box.innerHTML=a
    // let container=document.querySelector('.container')
    // container.appendChild(box)

    a=a+100
    let box=document.querySelector(".box");
    box.style.left=a+"px";

})