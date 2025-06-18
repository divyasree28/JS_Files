let cardinfo = [
    { url: "/images/loginbg.jpg", heading: "Test Heading1", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading2", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading3", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading4", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading5", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading6", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading7", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading8", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading9", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
    { url: "/images/loginbg.jpg", heading: "Test Heading0", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem cupiditate ducimus quibusdam debitis, quis obcaecati tempore." },
]

let current_page = 1, cardsperPage = 4;
let total_pages=Math.ceil(cardinfo.length/cardsperPage);
let display = document.getElementById('display');
let prev = document.getElementById('prev');
let next = document.getElementById('next');



display.addEventListener("click", (e) => {
    e.preventDefault();
    cardinfo.forEach((card, index) => {
        if (index <4) {
            let div1 = document.createElement('div');
            div1.className = "card";
            div1.innerHTML = `<div><img src="${card.url}" style="width: 100%; height: 200px;" /></div>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <p style="font-size: 16px;margin-bottom: 0px;"><b>${card.heading}</b></p>
            <p>${card.para}</p>
        </div>`
            let displayarea = document.getElementById('displayarea');
            displayarea.appendChild(div1);
        }
    })
    updatePageNumber();
})

function displayCards(page) {
    let start = (page - 1) * cardsperPage;
    let end = start + cardsperPage;
    let cardarea=document.querySelectorAll('.card');
    if(cardarea){cardarea.forEach((c)=>c.remove());}
    
    cardinfo.forEach((card, index) => {
        if (index >= start && index < end) {
            let div1 = document.createElement('div');
            div1.className = "card";
            div1.innerHTML = `<div><img src="${card.url}" style="width: 100%; height: 200px;" /></div>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <p style="font-size: 16px;margin-bottom: 0px;"><b>${card.heading}</b></p>
            <p>${card.para}</p>
        </div>`
            let displayarea = document.getElementById('displayarea');
            displayarea.appendChild(div1);
        }
    })
}

function updatePageNumber() {
    let pgno_display=document.getElementById('pageNumber');
    pgno_display.textContent=`Page ${current_page} of ${total_pages}`;
}

prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (current_page > 1) {
        current_page--;
        displayCards(current_page);
        updatePageNumber();
    }
})

next.addEventListener("click",(e)=>{
    e.preventDefault();
    if(current_page<total_pages) {
        current_page++;
        displayCards(current_page);
        updatePageNumber();
    }
})