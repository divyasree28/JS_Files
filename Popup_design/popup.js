let pop=document.getElementById('pop');
let poparea=document.getElementById('popup-area');
let close=document.getElementById('close');

pop.addEventListener("click",(e)=>{
    document.body.style.backgroundColor = "#9EA9B1";
    poparea.style.display='block';
    pop.style.display='none';
    console.log("clicked");
})

close.addEventListener("click",(e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = 'white';
    poparea.style.display='none';
    pop.style.display='block';
})