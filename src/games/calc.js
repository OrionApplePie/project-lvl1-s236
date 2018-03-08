import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'What is the result of the expression?';
const minNum = 0;
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
  const a = randInt(minNum, maxNum);
  const b = randInt(minNum, maxNum);
  const op = operations[randInt(0, maxLen)];
  const expression = `${a} ${op} ${b}`;
  const correctAnswer = getCorrectAnswer(a, b, op);
  return cons(expression, correctAnswer.toString());
};

export default () => commonFlow(rules, calcGameQuestionGenerator);
