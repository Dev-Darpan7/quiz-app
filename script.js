// Get the HTML element that has id="question"
// We will show the question inside this div
const question = document.getElementById("question");

// Get the HTML element that has id="options"
// We will show answer buttons inside this div
const options = document.getElementById("options");

// Create an array called quiz
// An array stores multiple items
const quiz = [

  // First question object
  {
    // The question text
    question: "What is 2 + 2?",

    // Array of possible answers
    options: ["3", "4", "5", "6"],

    // Correct answer
    answer: "4",
  },
];

// quiz[0] means:
// Give me the first item from the quiz array
//
// Then .question means:
// Give me the question property from that object
//
// Result:
// "What is 2 + 2?"
question.textContent = quiz[0].question;

// Replace everything inside the options div
// with the HTML below
options.innerHTML = `

<!-- First answer button -->
<button>${quiz[0].options[0]}</button>

<!-- Second answer button -->
<button>${quiz[0].options[1]}</button>

<!-- Third answer button -->
<button>${quiz[0].options[2]}</button>

<!-- Fourth answer button -->
<button>${quiz[0].options[3]}</button>

`;