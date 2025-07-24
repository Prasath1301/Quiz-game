// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
 {
    question: "நோவா எந்த மரத்தால் பேழையை உண்டு பண்ணினான்?",
    answers: [
      { text: "தேவதாரு மரம்", correct: false },
      { text: "கர்வாலி மரம்", correct: false },
      { text: "கொப்பேர் மரம்", correct: true },
      { text: "வாதுமை மரம்", correct: false },
    ],
  },
  {
    question: "பேழையிலிருந்து வெளியே சென்ற புறா எந்த மரத்தின் இலையைக் கொத்திக் கொண்டு வந்தது?",
    answers: [
      { text: "கர்வாலி", correct: false },
      { text: "அத்தி", correct: false },
      { text: "ஒலிவமரம்", correct: true },
      { text: "பனை", correct: false },
    ],
  },
  {
    question: "மரத்தடியில் மூன்று நாள் புருஷர்களுக்கு அருகே நின்று கொண்டிருந்தவன் யார்?",
    answers: [
      { text: "ஆபிரகாம்", correct: true },
      { text: "லோத்து", correct: false },
      { text: "ஈசாக்கு", correct: false },
      { text: "நோவா", correct: false },
    ],
  },
  {
    question: "யாக்கோபு தன் வீட்டாரின் அந்நிய தெய்வங்களை எந்த மரத்தின் கீழே புதைத்தான்?",
    answers: [
      { text: "மாதளமரம்", correct: false },
      { text: "தேவதாரு மரம்", correct: false },
      { text: "புன்னை மரம்", correct: false },
      { text: "கர்வாலி மரம்", correct: true },
    ],
  },
  {
    question: "தெபோராள் எந்த மரத்தின் கீழ் அடக்கம் பண்ணப்பட்டாள்",
    answers: [
      { text: "அத்தி மரம்", correct: false },
      { text: "கர்வாலி மரம்", correct: false },
      { text: "ஒலிவ மரம்", correct: true },
      { text: "பேரீச்சை மரம்", correct: false },
    ],
  },
   {
    question: "மோசே தண்ணீரில் மரத்தைப் போட்ட இடம் எது?",
    answers: [
      { text: "மாரா", correct: true },
      { text: "மேரிபா", correct: false },
      { text: "மாசா", correct: false },
      { text: "கானான்", correct: false },
    ],
  },
   {
     question: "வாசஸ்தலத்துக்கு பலகைகள் எந்த மரத்தால் செய்யப்பட்டது?",
    answers: [
      { text: "சீத்திம்", correct: true },
      { text: "கர்வாலி", correct: false },
      { text: "கொப்பேர்", correct: false },
      { text: "வாதுமை", correct: false },
    ],
  },
   {
     question: "உடன்படிக்கைப்பெட்டி எந்த மரத்தால் செய்யப்பட்டது?",
    answers: [
      { text: "கேதுரு", correct: false },
      { text: "தேவதாரு", correct: false },
      { text: "அத்தி", correct: false },
      { text: "சீத்திம்", correct: true },
    ],
  },
   {
     question: "தூப்பீடம் எந்த மரத்தால் உண்டாக்கப்பட்டது?",
    answers: [
      { text: "கர்வாலி", correct: false },
      { text: "சீத்திம்", correct: true },
      { text: "மாதுளை", correct: false },
      { text: "புன்னை", correct: false },
    ],
  },
   {
     question: "தகனபலிபீடத்தை சீத்திம் மரத்தால் உண்டாக்கயது யார்?",
    answers: [
      { text: "பெசலெயேல்", correct: true },
      { text: "யோனதாப்", correct: false },
      { text: "அபிமலேக்கு", correct: false },
      { text: "யோனத்தான்", correct: false },
    ],
  },
  
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

startQuiz();
}
