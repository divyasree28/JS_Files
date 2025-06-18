let inp1=document.getElementById('inp1');
let inp2=document.getElementById('inp2');
let check=document.getElementById('check');
let output=document.getElementById('output');

check.addEventListener("click",(e)=>{
    e.preventDefault();
    let word1=inp1.value.split('').sort().join('');
    let word2=inp2.value.split('').sort().join('');
    console.log(word1+" "+word2);
    if(word1===word2) {
        output.textContent="Anagrams";
    }
    else {output.textContent="Not Anagrams";}
})