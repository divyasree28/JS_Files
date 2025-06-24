let display=document.getElementById('display');
let submit=document.getElementById('submit');
let letter=document.getElementById('letter');
let error_message=document.getElementById('error_message');

const words = [
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];

const word_idx=Math.floor(Math.random()*words.length);
let word=words[word_idx];
console.log(word);
let guessed_arr=[];
let displayWord="";

for(let i=0;i<word.length;i++) {
    displayWord+='_ ';
}
display.textContent=displayWord;

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let guessed_letter=letter.value;

   if(guessed_letter=='') {error_message.textContent='Please add input letter';return;}

   if(guessed_arr.includes(guessed_letter)) {error_message.textContent='The letter has already accepted.';return;}

   guessed_arr.push(guessed_letter);

   letter.value='';

   let updated_word='';
   let word_complete=true;
   for(let i=0;i<word.length;i++) {
    if(guessed_arr.includes(word[i])) {
        
        updated_word+=word[i]+" ";
    }
    else {
        updated_word+='_ '
        word_complete=false;
    }
   }
   display.textContent=updated_word;
   if(word_complete) {
    alert("Successfully guessed the word");
   }
})