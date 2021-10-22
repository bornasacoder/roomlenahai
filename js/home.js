

let roomOwner=document.querySelector('#owner-form');
let roomRenter=document.querySelector('#renter-form');
let roomOwner1=document.querySelector('#owner-form-1');
let roomRenter1=document.querySelector('#renter-form-1');
let submitBtn1=document.querySelector('#submit-btn-1');
let submitBtn2=document.querySelector('#submit-btn-2');
let backBtn = document.querySelectorAll('.back-btn');
let formHead = document.querySelectorAll('.form-head');
let inputBox1 = document.querySelectorAll('.inputBox-1');
let formImg = document.querySelector('#form-img-1');


submitBtn1.addEventListener('click',function(e){
    roomOwner.style.display="none";
    roomRenter.style.display="none";
    roomRenter1.style.display="none";
    roomOwner1.style.display="block";
    formImg.style.height="400px";
    e.preventDefault();
    
   func3()

})
submitBtn2.addEventListener('click',function(e){
    e.preventDefault();
    roomOwner.style.display="none";
    roomRenter.style.display="none";
    roomRenter1.style.display="block";
    roomOwner1.style.display="none";
    formImg.style.height="440px";
    func4();
  
});
Array.from(backBtn).forEach(function(element){
element.addEventListener('click',function(e){
    roomOwner.style.display="block";
    roomRenter.style.display="block";
    roomOwner1.style.display="none";
    roomRenter1.style.display="none";
    e.preventDefault();
    formImg.style.height="300px";
});
});
function func3(){
    let inputVal = inputBox1[0].value;
    inputBox1[0].value="";
    formHead[2].innerHTML='hii '+ inputVal;
    
}
function func4(){
    let inputVal = inputBox1[1].value;
    inputBox1[1].value="";
    formHead[3].innerHTML='hii '+ inputVal;
   
}


let common = document.querySelectorAll('.common');
  

let select1 = document.querySelector('.select-1');
    select1.addEventListener('input',function(){
      
        if(select1.value=='FLATS'){
             common[0].style.display="flex";
             common[1].style.display="none";
             common[2].style.display="none";
           }
           else if(select1.value=='ROOMS'){
                common[1].style.display="flex";
                common[0].style.display="none";
                common[2].style.display="none";
           }
           else if(select1.value=='PG HOSTELS'){
           
           common[2].style.display="flex";
           common[1].style.display="none";
           common[0].style.display="none";
   
    }
           else{
               
           common[0].style.display="none";
           common[1].style.display="none";
           common[2].style.display="none";
           }
});

let select2 = document.querySelector('.select-2');
    select2.addEventListener('input',function(){
       
        if(select2.value=='FLATS'){
             common[3].style.display="flex";
             common[4].style.display="none";
             common[5].style.display="none";
           }
           else if(select2.value=='ROOMS'){
                common[4].style.display="flex";
                common[3].style.display="none";
                common[5].style.display="none";
           }
           else if(select2.value=='PG HOSTELS'){
           
           common[5].style.display="flex";
           common[4].style.display="none";
           common[3].style.display="none";
   
    }
           else{
               
           common[3].style.display="none";
           common[4].style.display="none";
           common[5].style.display="none";
           }
});

