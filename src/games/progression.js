import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'What number is missing in this progression?';
const maxProgressionLen = 10;
const minNum = 0;
const maxNum = 50;

const getMemberOfAP = (first, diff, n) => first + ((n - 1) * diff);

const apGemeQuestionGenerator = () => {
  const first = randInt(minNum, maxNum);
  const diff = randInt(minNum, maxNum);
  const hiddenMemberNumber = randInt(1, maxProgressionLen);
  let next;
  const iter = (counter, acc) => {
    if (counter === maxProgressionLen + 1) {
      return acc;
    }
    next = counter === hiddenMemberNumber ? '..' : getMemberOfAP(first, diff, counter);
    return iter(counter + 1, `${acc} ${next}`);
  };
  return cons(iter(1, ''), getMemberOfAP(first, diff, hiddenMemberNumber).toString());
};

export default () => commonFlow(rules, apGemeQuestionGenerator);
