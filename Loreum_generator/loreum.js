

function submitData() {
    let paras = document.getElementById('para');
    let words = document.getElementById('words');
    let tag = document.getElementById('tags');
    let include = document.getElementById('include');
    let loreum_text = textGenerator(words.value);
    let display = document.getElementById('display');
    //console.log(loreum_text);
    let display_text=[];
    let tagg=tag.value;
    for (let i = 0; i < paras.value; i++) {
        include.value=='yes' ? display_text[i] = `<${tagg}> ${loreum_text} </${tagg}>`:display_text[i]=loreum_text;
    }
    display.innerHTML=display_text.join("\n");
    console.log(display.innerHTML);

}

function rangeChange(type) {
    let paras = document.getElementById('para');
    let para = document.getElementById('para-display');
    let words = document.getElementById('words');
    let word = document.getElementById('words-display');
    if (type == 'para') { para.textContent = paras.value; }
    else { word.textContent = words.value; }
}

function textGenerator(words) {
    let loreumtext = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, aut eius magnam dolore neque quos voluptatum sed laudantium aspernatur repellendus velit hic quasi, distinctio repellat cumque veniam ut. Beatae, necessitatibus!";
    let arr = loreumtext.split(" ");
    return arr.slice(0, words).join(" ");
}