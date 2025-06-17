let load=document.querySelector('.load');
load.addEventListener("click",(e)=>{
    e.preventDefault();
    let div1=document.createElement('div');
    div1.className='loaded';
    load.appendChild(div1);
    setTimeout(() => {
        div1.remove();
    }, 5000);
})

