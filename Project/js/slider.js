// sekil bazasi yaradilmalidir
// sekillerin olcu problemi helledilmelidir
// slider genisliyinin dinamiklesdirilmesi
// 
{/*                         <div class="slider-item">
                                <img src="img/1.jpg" >
                            </div> */}
let slider=document.querySelector('.slider');
let sliderWidth=slider.getBoundingClientRect().width;
let imgs=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/3.jpg','img/4.jpg','img/5.jpg']
for(let i=0;i<imgs.length;i++){
    let sliderItem=document.createElement('div'); // yeni div elementi yarat
    sliderItem.className='slider-item'; // yaradilan div elementine  'slider-item' classi elave et
    let sliderItemImg=document.createElement('img'); // yeni img elementi yarat
    sliderItemImg.setAttribute('src',imgs[i]); // img elementine src attributu teyin et 
    sliderItem.appendChild(sliderItemImg); // yaradilan img elementini sliderItem elementinin icine yerlesdir
    slider.appendChild(sliderItem) // sliderItem elementini de slider elementini icine yerlesdir
}


let newSliderWidth=(sliderWidth+20)*imgs.length;

slider.style.width=newSliderWidth+"px";
