import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const MAX_NUM = 100;
const QUESTION_COUNT = 3;
const RULES_STR = 'Answer "yes" if number even otherwise answer "no".';

const evenGameQuestionGenerator = () => {
  const num = randInt(MAX_NUM);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return cons(num, correctAnswer);
};

export default () => commonFlow(RULES_STR, QUESTION_COUNT, evenGameQuestionGenerator);
