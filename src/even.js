import readlineSync from 'readline-sync';

const MAX_NUM = 100;
const QUESTION_COUNT = 3;

const randInt = max => Math.floor(Math.random() * Math.floor(max));

export default (userName) => {
  for (let i = 0; i < QUESTION_COUNT; i += 1) {
    const num = randInt(MAX_NUM);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
