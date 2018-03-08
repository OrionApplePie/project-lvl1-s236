import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'Find the greatest common divisor of given numbers.';
const maxNum = 100;

const gcd = (a, b) => {
  if (a !== 0 && b !== 0) {
    if (a > b) {
      return gcd(a % b, b);
    }
    return gcd(a, b % a);
  }
  return a + b;
};

const gcdGameQuestionGenerator = () => {
  const a = randInt(0, maxNum);
  const b = randInt(0, maxNum);
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);
  return cons(question, correctAnswer.toString());
};

export default () => commonFlow(rules, gcdGameQuestionGenerator);
