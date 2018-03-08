import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const RULES_STR = 'Find the greatest common divisor of given numbers.';
const QUESTION_COUNT = 3;
const MAX_NUM = 100;

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
  const a = randInt(MAX_NUM);
  const b = randInt(MAX_NUM);
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);
  return cons(question, correctAnswer.toString());
};

export default () => commonFlow(RULES_STR, QUESTION_COUNT, gcdGameQuestionGenerator);
