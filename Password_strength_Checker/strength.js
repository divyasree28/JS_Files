let password=document.getElementById('password');
let colordiv=document.getElementById('innerdiv');
let widthPower = ["5%", "25%", "50%", "75%", "100%"];
let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

// password.addEventListener("change",(e)=>{
//     e.preventDefault();
//     console.log('test')
// })

password.oninput=function() {
    let specifications=[/[a-z]/,/[A-Z]/,/[0-9]/,/[$%@]/];
    let strength=0;
    if(password.value.length>=6) {
        specifications.forEach((s)=>{
            if(s.test(password.value)) strength++;

        });
    }
    colordiv.style.width=widthPower[strength];
    colordiv.style.backgroundColor=colorPower[strength];
}