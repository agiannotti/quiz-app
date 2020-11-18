/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable quotes */
'use strict';


/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      questionNumber: 1,
      question: 'Which city has the highest density of cats?',
      answers: [
        'Tokyo',
        'Istanbul',
        'New York City',
        'Paris'
      ],
      correctAnswer: 'Istanbul'
    },
    {
      questionNumber: 2,
      question: 'Which body of water is Easter island located in?',
      answers: [
        'Adriatic Sea',
        'The Narrow Sea',
        'The Pacific Ocean',
        'The Arctic ocean'
      ],
      correctAnswer: 'The Pacific Ocean'
    },
    { 
      questionNumber: 3,
      question: 'Which planet has zero land mass?',
      answers: [
        'Venus',
        'Mercury',
        'Saturn',
        'Neptune'
      ],
      correctAnswer: 'Saturn'
    },
    {
      questionNumber: 4,
      question: 'Which method of brewing coffee is considered immersion?',
      answers: [
        'Chemex',
        'AeroPress',
        'French press',
        'Machine drip'
      ],
      correctAnswer: 'French Press'
    },
    {
      questionNumber: 5,
      question: 'What is the distance from LA to New York City?',
      answers: [
        '2,794 miles',
        '1200 clicks',
        '200 yalms',
        'A single Parsec'
      ],
      correctAnswer: '2,794 miles'
    }
  ],
  quizStarted: true,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateQuestion() {
  let question = store.questions[store.questionNumber];
  console.log(`generateQuestion 'ran'`);

  return `
  <div class='questionPage'>
    <form id='questionAndAnswers'>
    <h2>${question.question}</h2>
      <input type="radio" id="answer1" name="answer" value=${question.answers[0]}>
      <label for="answer1">${question.answers[0]}</label><br>
      <input type="radio" id="answer2" name="answer" value=${question.answers[1]}>
      <label for="answer2">${question.answers[1]}</label><br>
      <input type="radio" id="answer3" name="answer" value=${question.answers[2]}>
      <label for="answer3">${question.answers[2]}</label><br>
      <input type="radio" id="answer4" name="answer" value=${question.answers[3]}>
      <label for="answer4">${question.answers[3]}</label><br></br>
      <button type="button">Submit Answer.</button>
    </form>
  </div>`;
}

function generateMainPage() {
  console.log(`generateMainPage 'ran'`);
  return `
  <h2>Here's a Quiz with a few questions regarding life and living.</h2>
  <button id='#startQuiz' type="button">Begin Quiz</button>
  `;
}

function generateCorrectPage() {
  console.log(`generateCorrectPage 'ran'`);

}
function generateIncorrectPage() {
  console.log(`generateIncorrectPage'ran'`);
}

function generateEndOfGamePage() {
  console.log(`generateEndOfGamePage'ran'`);

}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderHtml() {
  let html = '';
  console.log(`renderHtml 'ran'`);
  if(store.quizStarted === false) {
    html = generateMainPage();
  } else {
    html= generateQuestion();
  }
  $('main').html(html);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz() {
  $('main').on('click', '#startQuiz', function(event) {
    event.preventDefaiult;
    renderHtml();
    console.log(`handleStartQuiz 'ran'`);
  });
}

function handleAnswerSubmit() {
  console.log(`handleAnswerSubmit 'ran'`);
}

function handleResetSubmit() {
  console.log(`handleResetSubmit 'ran'`);

}


function main() {

  $(renderHtml);
  $(handleStartQuiz);
  $(handleAnswerSubmit);
  $(generateQuestion);
  $(generateMainPage);
  $(generateCorrectPage);
  $(generateIncorrectPage);
  $(generateEndOfGamePage);
  $(handleResetSubmit);
  

}

$(main);