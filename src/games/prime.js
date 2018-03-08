import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'Is this number prime?';
const minNum = 2;
const maxNum = 100;

const isPrime = (num) => {
  const sqrtNum = Math.floor(Math.sqrt(num)) + 1;
  for (let i = 2; i < sqrtNum; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeGameQuestionGenerator = () => {
  const num = randInt(minNum, maxNum);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(num, correctAnswer);
};

export default () => commonFlow(rules, primeGameQuestionGenerator);
