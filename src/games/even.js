import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const maxNum = 100;

const evenGameQuestionGenerator = () => {
  const num = randInt(maxNum);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return cons(num, correctAnswer);
};

export default () => commonFlow(rules, evenGameQuestionGenerator);
