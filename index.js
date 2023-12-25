let form=document.querySelector('.form');
form.style.display ="none";
document.querySelector('.continue').onclick=function(){
    form.style.display="block";
}
let click=document.querySelector('.close').onclick=function(){
   form.style.display="none";
}
// let myNav=document.querySelector('.navigation');
// document.querySelector('.fas').onclick=function(){
//     myNav.style.display="block";
// }
var sideMenu = document.querySelector('.navigation');

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}
var newForm=document.querySelector('.new-form');
newForm.style.display="none";
document.querySelector('.signup').onclick=function(){
    newForm.style.display="block";
}
var scrol;
document.querySelector('.scroll-down').onclick=function(){
    scrol.Scroll.display="down";
}
var select=document.querySelector('.order');
select.style.display="none";
document.querySelector('.submit').onclick=function(){
    select.style.display="block";
}
var myclose=document.querySelector('.order');
document.querySelector('.closee').onclick=function(){
    myclose.style.display="none";
}
const nextButton=document.querySelector('.next');
const nextContent=document.querySelector('.next-content');
nextButton.addEventListener("click",()=>{
    if(nextContent.style.display=="none"){
        nextContent.style.display="block";
    }
    else{
        nextContent.style.display="block";
    }
})

// document.querySelector('.submit').onclick=function(){
// // var text=document.querySelector('.text').Value;
// // if(text=="@"){
// //     document.querySelector('.label').innerHTML="you must enter valid email";
// // }
// // }C:\Users\Ismail\Documents\my company project\images
let content=document.querySelector('.content');
 var slide=['images/back.jpg','images/earphone.jpg', 'images/phone.jpg'];
 var start=0;
  function slide(){
    if(start<slide.length){
        start+=1;
    }
    else{
        start=1;
    }
    console.log(content);
    content.innerHTML="<img src="+slide[start-1]+">";
  }
  setInterval(slide,2000)