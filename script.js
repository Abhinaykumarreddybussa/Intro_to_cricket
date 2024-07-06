const questions = [
    {
        question: "Which team in the history of cricket has won the most number of Cricket world cups ?",
        choices: ["India", "England", "Australia", "West Indies"],
        answer: 2
    },
    {
        question: "which Indian player took game-changing catch in the final over of T20 world cup 2024 ?",
        choices: ["Ravindra Jadeja", "Virat Kohli", "Rishabh Pant", "Surya Kumar Yadav"],
        answer: 3
    },
    {
        question: "Which Indian player has most no. of centuries in ODI cricket",
        choices: ["Sachin Tendulkar", "Virat Kohli", "Rohit Sharma", "MS Dhoni"],
        answer: 1
    },
    {
        question: "Who among the following players have most no. of wickets in Test Cricket?",
        choices: ["Shane warne", "Glenn Mcgrath", "Muttaih Muralidaran", "James Anderson"],
        answer: 2
    },
    {
        question: "Who was the player of the series in infamous BGT 2020-21 ?",
        choices: ["Ajinkya Rahane", "Pat Cummins", "Rishabh Pant", "Virat Kohli"],
        answer: 1
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('Question');
const choicesElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const startbutton = document.getElementById('start');
const startcontainer = document.getElementById('Start_button');

function startQuiz() {
    startcontainer.style.display = 'none';
    submitButton.style.display = 'block';
    loadQuestion();
}
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="choice" value="${index}"> ${choice}`;
        choicesElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const answer = parseInt(selectedChoice.value);
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}
startbutton.addEventListener('click',startQuiz);
submitButton.addEventListener('click', checkAnswer);

