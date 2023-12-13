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
var sideMenu=document.querySelector('.navigation');
function openmenu(){
    sideMenu.style.right="0";
}
function closemenu(){
    sideMenu.style.right="-200px";
}
