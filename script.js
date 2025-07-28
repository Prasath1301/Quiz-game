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
      { text: "கர்வாலி மரம்", correct: false },
      { text: "அத்தி மரம்", correct: false },
      { text: "ஒலிவமரம்", correct: true },
      { text: "பனை மரம்", correct: false },
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
      { text: "கர்வாலி மரம்", correct: true },
      { text: "ஒலிவ மரம்", correct: false },
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
  {
     question: "இரவிலே எது மரத்தில் தொங்கலாகாது?",
    answers: [
      { text: "வௌவால்", correct: false },
      { text: "பறவை", correct: false },
      { text: "பிரேதம்", correct: true },
      { text: "ஆயுதம்", correct: false },
    ],
  },
  {
     question: "எந்த மரத்தை உதிர்த்து விட்ட பின்பு, தப்பியிருக்கிறதைப் பறிக்கத் திரும்பிப் போகக் கூடாது?",
    answers: [
      { text: "அத்தி மரம்", correct: false },
      { text: "கேதுரு மரம்", correct: false },
      { text: "ஒலிவ மரம்", correct: true },
      { text: "மாதுள மரம்", correct: false },
    ],
  },
  {
     question: "யோசுவா ஒரு பெரிய கல்லை எந்த மரத்தின் கீழே நாட்டினான்?",
    answers: [
      { text: "பேரீச்சை", correct: false },
      { text: "தேவதாரு", correct: false },
      { text: "கர்வாலி", correct: true },
      { text: "வாதுமை", correct: false },
    ],
  },
  {
     question: "தெபோராள் எந்த மரத்தின் கீழே குடியிருந்தாள்?",
    answers: [
      { text: "பேரீச்சை", correct: true },
      { text: "மாதுளை", correct: false },
      { text: "கேதுரு", correct: false },
      { text: "தென்னை", correct: false },
    ],
  },
  {
     question: "கிதியோனுக்குத் தரிசனமான தூதன் எந்த மரத்தின் கீழே அமர்ந்தார்?",
    answers: [
      { text: "காட்டத்தி", correct: false },
      { text: "கர்வாலி", correct: true },
      { text: "தேவதாரு", correct: false },
      { text: "மாதுளை", correct: false },
    ],
  },
  {
     question: "எந்த மரத்தண்டையிலே மில்லோவின் குடும்பத்தார் அபிமெலேக்கை ராஜாவாக்கினர்?",
    answers: [
      { text: "ஒலிவ மரம்", correct: false },
      { text: "மாதுளை மரம்", correct: false },
      { text: "கர்வாலி", correct: true },
      { text: "அத்தி மரம்", correct: false },
    ],
  },
  {
     question: "ஒரு படை மெயொனெனீமின் எந்த மரத்தின் வழியாய் வந்தது?",
    answers: [
      { text: "தேவதாரு", correct: false },
      { text: "வாதுமை", correct: false },
      { text: "கர்வாலி", correct: true },
      { text: "புன்னை", correct: false },
    ],
  },
  {
     question: "ஒரு மரத்தின் கொம்பை வெட்டி, தன் தோளின் மேல் போட்டுக் கொண்டது யார்?",
    answers: [
      { text: "அபிமெலேக்கு", correct: true },
      { text: "கிதியோன்", correct: false },
      { text: "அபியத்தான்", correct: false },
      { text: "சிம்சோன்", correct: false },
    ],
  },
  {
     question: "சவுல் எந்த மரத்தின் கீழ் இருந்தான்?",
    answers: [
      { text: "ஒலிவ மரம்", correct: false },
      { text: "அத்தி மரம்", correct: false },
      { text: "நெல்லி மரம்", correct: false },
      { text: "மாதுளை மரம்", correct: true },
    ],
  },
  {
     question: "எந்த மரத்தால் பண்ணப்பட்ட கீத வாத்தியங்களோடு, தாவீது கர்த்தருக்கு முன்பாக ஆடிப் பாடினான்?",
    answers: [
      { text: "தேவதாரு", correct: true },
      { text: "கேதுரு", correct: false },
      { text: "கர்வாலி", correct: false },
      { text: "புன்னை", correct: false },
    ],
  },
  {
     question: "அப்சலோமின் தலை எந்த மரத்தில் மாட்டிக் கொண்டது?",
    answers: [
      { text: "மாதுளை மரம்", correct: false },
      { text: "கர்வாலி மரம்", correct: true },
      { text: "ஒலிவ மரம்", correct: false },
      { text: "வாதுமை மரம்", correct: false },
    ],
  },
  {
     question: "சாலொமோனுடைய நாளெல்லாம் இஸ்ரவேலர் எந்த மரத்தின் நிழலில் சுகமாய்க் குடியிருந்தார்கள்?",
    answers: [
      { text: "கேதுரு", correct: false },
      { text: "அத்தி", correct: true },
      { text: "புன்னை", correct: false },
      { text: "ஒலிவ மரம்", correct: false },
    ],
  },
  {
     question: "சாலொமோன் கட்டின மாளிகையின் தூண்கள் எந்த மரத்தால் செய்யப்பட்டது?",
    answers: [
      { text: "கேதுரு", correct: true },
      { text: "பேரீச்சை", correct: false },
      { text: "அத்தி", correct: false },
      { text: "கர்வாலி", correct: false },
    ],
  },
  {
     question: "பச்சையான சகல மரத்தின் கீழும் பலியிட்டுத் தூபங்காட்டி வந்தது யார்?",
    answers: [
      { text: "ஆமான்", correct: false },
      { text: "யோவாப்", correct: false },
      { text: "ஆகாஸ்", correct: true },
      { text: "யோராம்", correct: false },
    ],
  },
  {
     question: "சவுலின் எலும்பை எந்த மரத்தின் கீழ் அடக்கம் பண்ணினர்?",
    answers: [
      { text: "தேவதாரு", correct: false },
      { text: "லீபனோன்", correct: false },
      { text: "வாதுமை", correct: false },
      { text: "கர்வாலி", correct: true },
    ],
  },
  {
     question: "மரத்தால் செய்யப்பட்ட ஒரு பிரசங்க பீடத்தின் மேல் நின்றவன் யார்?",
    answers: [
      { text: "நெகேமியா", correct: false },
      { text: "எஸ்றா", correct: true },
      { text: "யோனத்தான்", correct: false },
      { text: "யோசுவா", correct: false },
    ],
  },
  {
     question: "ஒரு மரத்தைக் குறித்தாவது நம்பிக்கையுண்டு என்று கூறியது யார்?",
    answers: [
      { text: "மோசே", correct: false },
      { text: "யோசுவா", correct: false },
      { text: "யோபு", correct: true },
      { text: "காலேப்", correct: false },
    ],
  },
  {
     question: "வழி தப்பினவன் பூக்கள் உதிர்ந்து போகிற எந்த மரத்தைப் போலிருப்பான்?",
    answers: [
      { text: "ஒலிவ மரம்", correct: true },
      { text: "அத்தி மரம்", correct: false },
      { text: "மாதுளை மரம்", correct: false },
      { text: "கேதுரு", correct: false },
    ],
  },
  {
     question: "அக்கிரமம் எந்த மரத்தைப் போல் முறிந்து விழும்?",
    answers: [
      { text: "இள மரம்", correct: false },
      { text: "பட்ட மரம்", correct: true },
      { text: "பச்சை மரம்", correct: false },
      { text: "முதிர் மரம்", correct: false },
    ],
  },
  {
     question: "பிகெமோத் தன் வாலை எந்த மரத்தைப் போல் நீட்டுகிறது?",
    answers: [
      { text: "அத்தி", correct: false },
      { text: "கர்வாலி", correct: false },
      { text: "வாதுமை", correct: false },
      { text: "கேதுரு", correct: true },
    ],
  },
  {
     question: "கர்த்தருடைய வேதத்தைத் தியானிக்கிறவன் எந்த மரத்தைப் போலிருப்பான்?",
    answers: [
      { text: "இலையுதிராதருக்கிற", correct: true },
      { text: "இலையுதிரும்", correct: false },
      { text: "உயரமான", correct: false },
      { text: "செழுமையான", correct: false },
    ],
  },
  {
     question: "நானோ தேவனுடைய ஆலயத்தில் பச்சையான எந்த மரத்தைப் போலிருக்கிறேன் என்று தாவீது கூறினார்?",
    answers: [
      { text: "அத்தி மரம்", correct: false },
      { text: "கேதுரு மரம்", correct: false },
      { text: "ஒலிவ மரம்", correct: true },
      { text: "பனை மரம்", correct: false },
    ],
  },
  {
     question: "எந்த மரத்தைக் காக்கிறவன் அதின் காக்கிறவன் அதின் கனியைப் புசிப்பான்?",
    answers: [
      { text: "அத்தி மரம்", correct: true },
      { text: "கேதுரு மரம்", correct: false },
      { text: "ஒலிவ மரம்", correct: false },
      { text: "கிச்சிலி மரம்", correct: false },
    ],
  },
  {
     question: "மரத்தைப் பிளக்கிறவன் அதினால் _____ படுவான்.",
    answers: [
      { text: "துன்பப்படுவான்", correct: false },
      { text: "மோசப்படுவான்", correct: true },
      { text: "கனப்படுவான்", correct: false },
      { text: "நலப்படுவான்", correct: false },
    ],
  },
  {
     question: "சாலொமோன் எந்த மரத்தினால் தனக்கு ஒரு இரதத்தைப் பண்ணுவித்தான்?",
    answers: [
      { text: "தேவதாரு மரம்", correct: false },
      { text: "தென்னை மரம்", correct: false },
      { text: "லீபனோன் மரம்", correct: true },
      { text: "பனை மரம்", correct: false },
    ],
  },
  {
     question: "ராஜகுமாரத்தியின் உயரம் எந்த மரத் தொழுங்கு போல இருக்கறது?",
    answers: [
      { text: "கிச்சிலி மரம்", correct: false },
      { text: "தேவதாரு மரம்", correct: false },
     { text: "கர்வாலி மரம்", correct: false },
      { text: "பனை மரம்", correct: true },
    ],
  },
  {
     question: "நானோ தேவனுடைய ஆலயத்தில் பச்சையான_____மரத்தைப் போலிருக்கிறேன் என்று தாவீது கூறினார்",
    answers: [
      { text: "அத்தி மரம்", correct: false },
      { text: "கேதுரு மரம்", correct: false },
      { text: "ஒலிவ மரம்", correct: true },
      { text: "பனை மரம்", correct: false },
    ],
  },
  {
     question: "எந்த மரத்தைக் காக்கிறவன் அதின் கனியைப் புசிப்பான்?",
    answers: [
      { text: "அத்தி மரம்", correct: true },
      { text: "கேதுரு மரம்", correct: false },
      { text: "ஒலிவ மரம்", correct: false },
      { text: "கிச்சிலி மரம்", correct: false },
    ],
  },
  {
     question: "மரத்தைப் பிளக்கிறவன் அதினால்_____ படுவான்?",
    answers: [
      { text: "துன்பப்படுவான்", correct: false },
      { text: "மோசப்படுவான்", correct: true },
      { text: "கனப்படுவான்", correct: false },
      { text: "நலப்படுவான்", correct: false },
    ],
  },
  {
     question: "சாலொமோன் எந்த மரத்தினால் தனக்கு ஒரு இரதத்தைப் பண்ணுவித்தான்?",
    answers: [
      { text: "தேவதாரு மரம்", correct: false },
      { text: "தென்னை மரம்", correct: false },
      { text: "லீபனோன் மரம்", correct: true },
      { text: "பனை மரம்", correct: false },
    ],
  },
  {
     question: "ராஜகுமாரத்தியின் உயரம் எந்த மரத் தொழுங்கு போல இருக்கிறது",
    answers: [
      { text: "கிச்சிலி மரம்", correct: false },
      { text: "தேவதாரு மரம்", correct: false },
      { text: "கர்வாலி", correct: false },
      { text: "பனை மரம்", correct: true },
    ],
  },
   {
     question: "வானத்தின் சர்வசேனைகள் எந்த மரத்தின் காய்கள் உதிருகிறது போல உதிர்ந்து விழும்",
    answers: [
      { text: "நெல்லி மரம்", correct: false },
      { text: "அத்தி மரம்", correct: true },
      { text: "கேதுரு மரம்", correct: false },
      { text: "வாதுமை மரம்", correct: false },
    ],
  },
   {
     question: "தச்சன் எந்த மரத்தை நடுகிறான்",
    answers: [
      { text: "ஒலிவ மரம்", correct: false },
      { text: "மாதள மரம்", correct: false },
      { text: "அத்தி மரம்", correct: false },
      { text: "அசோக மரம்", correct: true },
    ],
  },
   {
     question: "எரேமியா எந்த மரத்தின் கிளையைக் கண்டான்",
    answers: [
      { text: "வாதுமை மரம்", correct: true },
      { text: "அத்தி மரம்", correct: false },
      { text: "புன்னை மரம்", correct: false },
      { text: "கேதுரு மரம்", correct: false },
    ],
  },
   {
     question: "எந்த மரத்தால் தீருவின் கப்பற் பலகைகளைச் செய்தார்கள்?",
    answers: [
      { text: "கர்வாலி மரம்", correct: false },
      { text: "பேரீச்சை மரம்", correct: false },
      { text: "தேவதாரு மரம்", correct: true },
      { text: "காட்டத்தி மரம்", correct: false },
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
