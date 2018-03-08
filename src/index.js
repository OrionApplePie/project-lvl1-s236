import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const randInt = max => Math.floor(Math.random() * Math.floor(max));

const conversation = (rules) => {
  console.log('Welcome to Brain Games!');
  if (rules) {
    console.log(`${rules}\n`);
  } else {
    console.log();
  }
  const userName = readlineSync.question('May I have Your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};

const commonFlow = (rules, questionCount, questionGenerator) => {
  const userName = conversation(rules);

  for (let i = 0; i < questionCount; i += 1) {
    const questionPair = questionGenerator();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { conversation, randInt, commonFlow };
