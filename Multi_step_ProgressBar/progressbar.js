let current_step=1;
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let hrbg=document.getElementById('hrbg');
current_step=2;
function onPageLoad() {
    
    if(current_step<=1) {
        previous.remove();
    }
}

next.addEventListener("click",(e)=>{
    hrbg.setAttribute('transition','linear-gradient(to right, black 50%, red 50%) .5s ease-out ')
})