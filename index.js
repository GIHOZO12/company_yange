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
// var scrol;
// document.querySelector('.scroll-down').onclick=function(){
//     scrol.Scroll.display="down";
// }
var select=document.querySelector('.order');
select.style.display="none";
document.querySelector('.submit').onclick=function(){
    select.style.display="block";
}
var myclose=document.querySelector('.order');
document.querySelector('.closee').onclick=function(){
    myclose.style.display="none";
}

// document.querySelector('.submit').onclick=function(){
// // var text=document.querySelector('.text').Value;
// // if(text=="@"){
// //     document.querySelector('.label').innerHTML="you must enter valid email";
// // }
// // }C:\Users\Ismail\Documents\my company project\images
// let content=document.getElementsById('img');
//  var slide=['images/back.jpg','images/earphone.jpg', 'images/phone.jpg'];
//  var start=0;
//   function slides(){
//     if(start<slide.length){
//         start+=1;
//     }
//     else{
//         start=1;
//     }
//     console.log(content);
//     content.innerHTML="<img src=" + slide[start-1] + ">";
//   }
//   setInterval(slide,2000);

//   function scroll(sectionId){
//     var section=document.querySelector('.scroll-down');
//     if(section){
// //         section.scrollIntoView({behavior:'smooth'});s
// //     }
// //   }

//   var span=document.querySelector('.see-more');
//   var next_Content=document.querySelector('.next-content');
//   next_Content.style.display='none';
//   span.addEventListener('click',begin);
//   function begin(){
//     if(next_Content!=='none'){
//         next_Content.style.display='block';
//     }
//     else{
//         next_Content.style.display='none';
//     }
//   }

  var nameError=document.querySelector('.name-error');
  var emailError=document.querySelector('.email-error');
  var messageError=document.querySelector('.message-error');
  var sendError=document.querySelector('.submit-error');

  function validateName(){
 var name=document.querySelector('.name').value;
 if(name.length==0){
    nameError.innerHTML='name is required';
    return false;
 }
 if(!name.match(/^[A-Za-z]+(\s[A-Za-z]+)$/)){
    nameError.innerHTML='please write full name';
    return false;
 }
 nameError.innerHTML="valid";
}
  function validateEmail(){
 var email=document.querySelector('.email').value;
 if(email.length==0){
    nameError.innerHTML='email is required';
    return false;
 }
 if(!email.match(/^[A-Za-z][A-Za-z0-9_9%-]*@[A-Za-z]{5}\.[A-Za-z]{2,4}$/)){
    nameError.innerHTML='email is invalid';
    return false;
 }
 nameError.innerHTML="valid";
  }
function validateMessage(){
    var message=document.querySelector('.massage').value;
    var required=30;
    var left =required-message.length;
    if(left>0){
        messageError.innerHTML=left +'more characters';
        return false;
    }
    messageError.innerHTML='valid';
    return true;
}

function validateForm(){
    if(!validateName()||!validateEmail()||!validateMessage()){
        sendError.style.display="block";
        sendError.innerHTML="please fix error to submit";
        offset(sendError);
        return false;
    }
    function offset(v){
        setTimeout(function(){v.style.display='none'},3000);

    }
}



// let search=document.querySelector('.find');
// search.style.display = "none";
// document.querySelector('.check-button').onclick=function(){
//     search.style.display="block";
// }
let find = document.querySelector('.find');
var ser=document.getElementById("search");
ser.addEventListener("click",()=>{
    if(find.style.display=="none"){
        find.style.display="block";
    }
    else{
        find.style.display="none";
    }
})

// document.querySelector('.take').onclick=function(){
//     let option=document.querySelector('.my-option').value;
//     document.querySelector('.new-div').innerHTML=option;
// }
// document.querySelector('.buy-button').onclick=function(){
//     window.confirm('thank your for buy with us new-technologies \ncompany ltd we love you')
// }
var icon=document.getElementById("changecolor");

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
}
window.addEventListener('scroll',reval);
function reval(){
    var reveal=document.querySelectorAll('.reval');

    for(var i=0;i<reveal.length;i++){
        var windowHeight=window.innerHeight;
        var revealTop=reveal[i].getBoundingClientRect().top;
        var revealPoint=150;

        if(revealTop<windowHeight-revealPoint){
            reveal[i].classList.add('active');
        }
        else{
            reval[i].classList.remove('active');
        }
    } 
}
 var nextContent=document.querySelector('.next-content');
 var showDown=document.querySelector('.down-arrow');
 nextContent.style.display='none';

showDown.addEventListener('click',()=>{
    if(nextContent.style.display=="none"){
        nextContent.style.display="block";
    }
    else{
        nextContent.style.display="none";
       
    }
    if(nextContent.style.display=="block"){
        showDown.innerHTML="show less &uparrow;";
    }
    else{
        showDown.innerHTML="show more &downarrow;";
    }
})







