# 📝 Quiz App - Developer Notes

This document is for **me** to remember what I learned while building this project.

---

# 📚 Concepts I Used

## 1. Variables

Used to store values that change.

```js
let currentQuestion = 0;
let score = 0;
```

* `currentQuestion` → keeps track of which question is being displayed.
* `score` → stores the number of correct answers.

---

## 2. Arrays

Used to store multiple values.

```js
const quiz = [];
```

The `quiz` array stores every question.

---

## 3. Objects

Each question is an object.

```js
{
    question: "...",
    options: [...],
    answer: "..."
}
```

Objects group related data together.

---

## 4. DOM Selection

Used to access HTML elements.

```js
document.getElementById()
```

Examples:

```js
const question = document.getElementById("question");
const result = document.getElementById("result");
```

---

## 5. Functions

Functions perform specific tasks.

Examples:

* `showQuestion()`
* `checkAnswer()`
* `restartQuiz()`

---

## 6. Displaying Data

Used

```js
textContent
```

Example:

```js
question.textContent = quiz[currentQuestion].question;
```

Updates only the text.

---

## 7. Creating HTML

Used

```js
innerHTML
```

Example:

```js
options.innerHTML = `
<button>...</button>
`;
```

Creates buttons dynamically.

---

## 8. Accessing Data

```js
quiz[currentQuestion]
```

Meaning:

Get the current question object.

Example:

```js
quiz[0]
```

↓

First question.

Then

```js
quiz[currentQuestion].question
```

↓

Gets only the question.

---

## 9. Condition

Used

```js
if
```

Example:

```js
if(selectedAnswer === quiz[currentQuestion].answer)
```

Checks whether the selected answer is correct.

---

## 10. Updating Score

```js
score++;
```

Increases score by one.

---

## 11. setTimeout()

```js
setTimeout(function(){

},2000);
```

Purpose:

Wait before executing code.

Used to:

* Show "Correct" or "Wrong"
* Wait 2 seconds
* Show the next question

---

## 12. querySelectorAll()

```js
options.querySelectorAll("button");
```

Gets every answer button inside the options container.

---

## 13. forEach()

```js
buttons.forEach(function(button){

});
```

Runs the same code for every button.

Used to disable all answer buttons.

---

## 14. disabled Property

```js
button.disabled = true;
```

Prevents users from clicking the answer multiple times.

---

## 15. Restart Quiz

Reset variables.

```js
currentQuestion = 0;
score = 0;
```

Then call

```js
showQuestion();
```

to display the first question again.

---

# 🎨 CSS Concepts Used

* Flexbox
* `justify-content`
* `align-items`
* `border-radius`
* `padding`
* `margin`
* Hover effect
* Background colors
* Box shadow
* Responsive Design (started)
* Media Queries

---

# 📱 Responsive Design

Desktop First approach.

Normal CSS:

```css
.card{
    width:450px;
}
```

For phones:

```css
@media (max-width:480px){

}
```

Meaning:

If the screen width is **480px or smaller**, apply the CSS inside.

---

# 🐛 Bugs I Fixed

### Bug 1

Problem:

Users could click multiple answers.

Solution:

Disabled answer buttons.

---

### Bug 2

Problem:

Restart button stopped working.

Cause:

```js
document.querySelectorAll("button");
```

selected every button.

Solution:

```js
options.querySelectorAll("button");
```

Only selects answer buttons.

---

### Bug 3

Problem:

Score became larger than the number of questions.

Cause:

Answer could be clicked multiple times before moving to the next question.

Solution:

Disable buttons immediately after the first click.

# Skills Gained

* DOM Manipulation
* JavaScript Logic
* Arrays & Objects
* Functions
* Event Handling
* Debugging
* Dynamic HTML
* Basic Responsive Design
* Git Commits
* Writing Documentation


