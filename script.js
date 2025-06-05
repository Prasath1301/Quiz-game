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
    question: "Who is considered to be the internal user of the financial information?",
    answers: [
      { text: "Customer", correct: false },
      { text: "Government", correct: false },
      { text: "Employee", correct: true },
      { text: "Creditor", correct: false },
    ],
  },
  {
    question: "Financial position of a business is ascertained on the basis of",
    answers: [
      { text: "Journal", correct: false },
      { text: "Balance sheet", correct: true },
      { text: "Ledger", correct: false },
      { text: "Trial balance", correct: false },
    ],
  },
  {
    question: "Which one the following is not a branch of accounting?",
    answers: [
      { text: "Financial accounting", correct: false },
      { text: "Management accounting", correct: false },
      { text: "Human resouces accounting", correct: false },
      { text: "none of the above", correct: true },
    ],
  },
  {
    question: "_____ fruit is red color?",
    answers: [
      { text: "kiwi", correct: false },
      { text: "banana", correct: false },
      { text: "Apple", correct: true },
      { text: "Orange", correct: false },
    ],
  },
  {
    question: "Cash book is a",
    answers: [
      { text: "Priincipal book", correct: false },
      { text: "Journal proper", correct: false },
      { text: "Both subsidiary book and principal book", correct: true },
      { text: "Subsidiary book", correct: false },
    ],
  },
   {
    question: "Which one of the following is not a main objective of accounting?",
    answers: [
      { text: "Systematic recording of transactian", correct: false },
      { text: "Ascertainment of the profitability of the business", correct: false },
      { text: "Ascertainment of the finacial position of the business", correct: false },
      { text: "Solving tax disputes with tax authorities", correct: true },
    ],
  },
   {
    question: "The root of financial accounting system is",
    answers: [
      { text: "Social accounting", correct: false },
      { text: "Stewardship accounting", correct: true },
      { text: "Management accounting", correct: false },
      { text: "Responsibility accounting", correct: false },
    ],
  },
   {
    question: "The business is liable to the proprietor of the business in respect of capital introduced by the person according to",
    answers: [
      { text: "Money measurement concept", correct: false },
      { text: "Cost concept", correct: false },
      { text: "Business entity concept", correct: true },
      { text: "Dual aspect concept", correct: false },
    ],
  },
   {
    question: "The concept which assume that a business will last indefinitely is",
    answers: [
      { text: "Business entity", correct: false },
      { text: "Going concern", correct: true },
      { text: "Periodicity", correct: false },
      { text: "Conservatism", correct: false },
    ],
  },
   {
    question: "GAAPs are:",
    answers: [
      { text: "Generally accepted accounting policies", correct: false },
      { text: "Generally accepted accounting principle", correct: true },
      { text: "Generally accepted accounting provitions", correct: false },
      { text: "none of these", correct: false },
    ],
  },
   {
    question: "In India, accounting standards are isued by",
    answers: [
      { text: "Reserve bank of india", correct: false },
      { text: "The cost and management accountants of india", correct: false },
      { text: "Supreme court of india", correct: false },
      { text: "The institute of chartered accountant of india", correct: true },
    ],
  },
   {
    question: "Accounting equation signifies",
    answers: [
      { text: "Capital of a business is equal to assets", correct: false },
      { text: "Liabilities of a business are equal to assets", correct: false },
      { text: "Capital of a business is equal to liabilites", correct: false },
      { text: "Assets of a business are equal to the total of capital and liabilities", correct: true },
    ],
  },
   {
    question: "'Cash withdraw by the proprietor from the business for his personal use' causes",
    answers: [
      { text: "Decrease in assets and decrease in owners capital", correct: true },
      { text: "Increase in one assets and decrease in another asset", correct: false },
      { text: "Increase in one asset and increases in liabilities", correct: false },
      { text: "Increase in asset  and decrease in capital", correct: false },
    ],
  },
   {
    question: "The incorrect accounting equation is ",
    answers: [
      { text: "Assets=liabilities+capital", correct: false },
      { text: "Assets=capital+liabilities", correct: false },
      { text: "Liabilities=assets=capital", correct: true },
      { text: "Capital=assets+liabilities", correct: false },
    ],
  },
   {
    question: "A firm has assets of $1,00,000 and the external liabilities of 60,000. Its capital would be ",
    answers: [
      { text: "$1,60,000", correct: false },
      { text: "$60,000", correct: false },
      { text: "$1,00,000", correct: false },
      { text: "$40,000", correct: true },
    ],
  },
   {
    question: "Accounting equation is formed based on the accounting principle of",
    answers: [
      { text: "Dual aspect", correct: true },
      { text: "Consistency", correct: false },
      { text: "Going concern", correct: false },
      { text: "Accrual", correct: false },
    ],
  },
   {
    question: "Real account deals with",
    answers: [
      { text: "Individual persons", correct: false },
      { text: "Expenses and losses", correct: false },
      { text: "Assets", correct: true },
      { text: "Incomes and gains", correct: false },
    ],
  },
   {
    question: "Which one of the following is representative personal account?",
    answers: [
      { text: "Building A/c", correct: false },
      { text: "Outstanding salary A/c", correct: true },
      { text: "Mahesh A/c", correct: false },
      { text: "Balan & Co", correct: false },
    ],
  },
   {
    question: "Prepaid rent is a",
    answers: [
      { text: "Nominal A/c", correct: false },
      { text: "Personal A/c", correct: false },
      { text: "Real A/c", correct: false },
      { text: "Representative personal A/c", correct: true },
    ],
  },
   {
    question: "Withdrawal of cash from business by the proprietor should be credited to",
    answers: [
      { text: "Drawings A/c", correct: false },
      { text: "Cash A/c", correct: true },
      { text: "Capital A/c", correct: false },
      { text: "Purchases A/c", correct: false },
    ],
  },
   {
    question: "In double entry system of book keeping, every business transaction affects",
    answers: [
      { text: "Minimum of two account ", correct: true },
      { text: "Same account on two different dates", correct: false },
      { text: "Two sides of the same account", correct: false },
      { text: "Minimum three accounts", correct: false },
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
