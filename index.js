var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log = console.log;
var score = 0;
var highScore = [
  {
    name: 'Ravi',
    score: 5,
  },
  {
    name: 'Akhil',
    score: 5,
  },
];
var userInput = readlineSync.question('What is Your Name? ').toUpperCase();
log(chalk.blue(`Welcome To Quiz About India`, userInput));

function play(question, answer) {
  var userResponse = readlineSync.question(question);
  if (answer.toUpperCase() === userResponse.toUpperCase()) {
    log(chalk.green('Correct!'));
    score = score + 1;
  } else {
    log(chalk.red('Wrong!!'));
    score = score - 1;
  }
  log('---------------');
}

quizQuestions = [
  {
    question: 'What is Capital Of India ',
    answer: 'Delhi',
  },
  {
    question: 'What is National Bird Of India ',
    answer: 'Peacock',
  },
  {
    question: 'What is National Animal Of India ',
    answer: 'Tiger',
  },
  {
    question: 'Who is Current Prime Minister Of India ',
    answer: 'Narendra Modi',
  },
  {
    question: 'Where is Supreme Court Located India ',
    answer: 'Delhi',
  },
];

for (let i = 0; i < quizQuestions.length; i++) {
  var que = quizQuestions[i];
  play(que.question, que.answer);
}
log('Your Score is', score > 0 ? score : 0);

for (let i = 0; i < highScore.length; i++) {
  log('High Score ' + highScore[i].name + ' ' + highScore[i].score);
}
log('Send Screen Shot If You Beaten High Score ');
