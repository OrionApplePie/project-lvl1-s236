import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'What is the result of the expression?';
const maxNum = 100;
const maxLen = 3;
const operations = '+-*';

const getCorrectAnswer = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const calcGameQuestionGenerator = () => {
  const a = randInt(maxNum);
  const b = randInt(maxNum);
  const op = operations[randInt(maxLen)];
  const expression = `${a} ${op} ${b}`;
  const correctAnswer = getCorrectAnswer(a, b, op);
  return cons(expression, correctAnswer.toString());
};

export default () => commonFlow(rules, calcGameQuestionGenerator);
