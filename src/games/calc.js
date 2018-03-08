import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const RULES_STR = 'What is the result of the expression?';
const QUESTION_COUNT = 3;
const MAX_NUM = 100;
const MAX_LEN = 3;
const OPERATIONS = '+-*';

const getCorrectAnswer = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return undefined;
  }
};

const calcGameQuestionGenerator = () => {
  const a = randInt(MAX_NUM);
  const b = randInt(MAX_NUM);
  const op = OPERATIONS[randInt(MAX_LEN)];
  const expression = `${a} ${op} ${b}`;
  const correctAnswer = getCorrectAnswer(a, b, op);
  return cons(expression, correctAnswer.toString());
};

export default () => commonFlow(RULES_STR, QUESTION_COUNT, calcGameQuestionGenerator);
