let num = document.getElementById('num');
let clear = document.getElementById('clear');
let submit = document.getElementById('submit');
let output = document.getElementById('output');


function isPrime(val) {
    if(val===1 || val===0) {return false;}
    for(let i=2;i<Math.sqrt(val);i++) {
        if(val%i===0) return false;
    }
    return true;
}

clear.addEventListener("click", (e) => {
    e.preventDefault();
    num.value = "";
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let val = Number(num.value);
    console.log(val);
    if (!isNaN(val)) {
        if (isPrime(val)) {
            output.textContent = `${val} is a Prime Number`;
        }
        else {
            output.textContent = `${val} is not a Prime Number`;
        }
    }
    else {
        output.textContent="Enter a number!"
    }
num.value="";
})