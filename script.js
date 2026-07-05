  // Get the HTML element that has id="question"
  // We will show the question inside this div
  const counter= document.getElementById("counter");
  const question = document.getElementById("question");

  // Get the HTML element that has id="options"
  // We will show answer buttons inside this div
  const options = document.getElementById("options");

  //it will show result
  const result = document.getElementById("result");
const restartBtn=document.getElementById("restartBtn")
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

    {
      question: "Capital of India?",
      options: ["Mumbai", "Delhi", "Pune", "Chennai"],
      answer: "Delhi",
    },
  ];

    let currentQuestion = 0;
    let score = 0;
  


  function showQuestion(){
  counter.textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;
  question.textContent = quiz[currentQuestion].question;
  options.innerHTML = `
    <button onclick="checkAnswer('${quiz[currentQuestion].options[0]}')">${quiz[currentQuestion].options[0]}</button>
    <button onclick="checkAnswer('${quiz[currentQuestion].options[1]}')">${quiz[currentQuestion].options[1]}</button>
    <button onclick="checkAnswer('${quiz[currentQuestion].options[2]}')">${quiz[currentQuestion].options[2]}</button>
    <button onclick="checkAnswer('${quiz[currentQuestion].options[3]}')">${quiz[currentQuestion].options[3]}</button>
    `;

  }
  showQuestion();


function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  result.textContent = "";
  showQuestion();
}

  // quiz[0] means:
  // Give me the first item from the quiz array
  //
  // Then .question means:
  // Give me the question property from that object
  //
  // Result:
  // "What is 2 + 2?"

  // Replace everything inside the options div
  // with the HTML below

  function checkAnswer(selectedAnwser) {
   
    if (selectedAnwser === quiz[currentQuestion].answer){
      result.textContent = "correct";
      result.style.color="green";
    score++;  
    }else {
      result.textContent = "wrong";
      result.style.color="red";   
    }
    // Disable buttons AFTER processing the answer
const buttons = options.querySelectorAll("button");

buttons.forEach(function(button) {
    button.disabled = true;
});

    setTimeout(function () {
  currentQuestion++;
  if(currentQuestion<quiz.length){
  showQuestion();}
  else{

  options.innerHTML = "";
  question.textContent="";
  counter.textContent = "";
  result.textContent = `Quiz finished! Your score is ${score} out of ${quiz.length}`;
  }
    
  },2000);
  }
