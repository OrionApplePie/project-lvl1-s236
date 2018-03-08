import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'What number is missing in this progression?';
const maxProgressionLen = 10;
const minNum = 0;
const maxNum = 50;

const progressionGameQuestionGenerator = () => {
  const firstMember = randInt(minNum, maxNum);
  const difference = randInt(minNum, maxNum);
  const hidenMemberNumber = randInt(1, maxProgressionLen);

  let ap = '';
  let nextMember;
  let correctAnswer;

  for (let i = 1; i <= maxProgressionLen; i += 1) {
    if (i === hidenMemberNumber) {
      nextMember = '..';
      correctAnswer = firstMember + ((i - 1) * difference);
    } else {
      nextMember = firstMember + ((i - 1) * difference);
    }
    ap = `${ap} ${nextMember}`;
  }
  return cons(ap, correctAnswer.toString());
};

export default () => commonFlow(rules, progressionGameQuestionGenerator);
