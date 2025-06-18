const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        answer: "Japan"
    }
];

let timer = document.getElementById('timer');
let ques = document.getElementById('ques');
let options = document.getElementById('options');
let next = document.getElementById('next');
let main = document.querySelector('.main');
let output = document.getElementById('output-div');
let expression = document.getElementById('expression');
let out = document.getElementById('out');
let restart = document.getElementById('restart');
let correct = 0, question_count = 0, ques_Interval;

//setInterval(quizManagement,30000);

function checkAnswer(selectedOption) {
    let crtanswer = quizData[question_count].answer;
    let userAnswer = quizData[question_count].userAnswer;

    if (userAnswer === null) {
        if (selectedOption === crtanswer) {
            correct++;
        }
    } else {
        if (selectedOption === crtanswer) {
            correct++;
        } else if (userAnswer === crtanswer) {
            correct--;
        }
    }

    quizData[question_count].userAnswer = selectedOption;
    console.log(correct);
}

function nextQuestion() {
    if (question_count < quizData.length - 1) {
        question_count++;
        quizManagement();
    }
    else if (question_count == quizData.length - 1) {
        console.log(question_count);
        displayResult();
    }
}

next.addEventListener("click", (e) => {
    nextQuestion();
})

function generateQuestion() {
    console.log(quizData[question_count]);
    let item = quizData[question_count];
    ques.innerHTML = item.question;
    item.options.forEach((opt) => {
        console.log(opt);
        let btn = document.createElement('button');
        btn.value = opt;
        btn.textContent = opt;
        btn.className = 'optbtn';
        btn.onclick = () => checkAnswer(opt);
        options.appendChild(btn);
    })
}

function timeManagement() {
    let timeleft = 30;
    ques_Interval = setInterval(() => {
        if (timeleft > 0) {
            timer.innerHTML = `<b>TimeUp: </b>${timeleft}`;
            //console.log(timeleft);
            timeleft--;
        }
        else if (timeleft == 0) {
            nextQuestion();
        }
    }, 1000)
}

function quizManagement() {
    if (question_count >= 1) {
        let btns = document.querySelectorAll('button');
        btns.forEach((b) => b.remove());
        clearInterval(ques_Interval);
        timeManagement();
        generateQuestion(question_count);
    }
    else {
        timeManagement();
        generateQuestion(question_count);
    }
    console.log(correct);

}

function displayResult() {
    main.style.display = 'none';
    output.style.display = 'flex';
    if (correct >= 3) {
        expression.textContent = '😊';
        out.innerHTML = `Your Score: ${correct}`;
    }
    else {
        expression.textContent = '🥲';
        out.innerHTML = `Your Score: ${correct}`;
    }
}

restart.addEventListener("click", (e) => {
    question_count = 0, correct = 0;
    main.style.display = 'flex';
    output.style.display = 'none';
    let btns = document.querySelectorAll('button');
    btns.forEach((b) => b.remove());
    clearInterval(ques_Interval);
    console.log(question_count);
    quizManagement();
})