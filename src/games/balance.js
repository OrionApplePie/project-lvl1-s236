import { cons } from 'hexlet-pairs';
import { commonFlow, randInt } from '..';

const rules = 'Balance the given number.';
const maxNum = 9999;

const getMaxDigit = (num) => {
  let value = num;
  let maxDigit = 0;
  let currDigit;
  do {
    currDigit = value % 10;
    if (currDigit > maxDigit) {
      maxDigit = currDigit;
    }
    value = (value - currDigit) / 10;
  } while (value > 0);
  return maxDigit;
};

const getMinDigit = (num) => {
  let value = num;
  let minDigit = 9;
  let currDigit;
  do {
    currDigit = value % 10;
    if (currDigit < minDigit) {
      minDigit = currDigit;
    }
    value = (value - currDigit) / 10;
  } while (value > 0);
  return minDigit;
};

const sortDigits = (numStr) => {
  if (numStr === '') return '';
  let min = numStr[0];
  for (let i = 0; i < numStr.length; i += 1) {
    if (Number.parseInt(numStr[i], 10) < Number.parseInt(min, 10)) {
      min = numStr[i];
    }
  }
  return `${min}${sortDigits(numStr.replace(min, ''))}`;
};

const getBalanced = (num) => {
  const maxDigit = getMaxDigit(num);
  const minDigit = getMinDigit(num);
  if (maxDigit - minDigit > 1) {
    const numStr = num.toString().replace(maxDigit, maxDigit - 1).replace(minDigit, minDigit + 1);
    return getBalanced(Number.parseInt(numStr, 10));
  }
  return sortDigits(num.toString());
};

const balanceGameQuestionGenerator = () => {
  const num = randInt(maxNum);
  const correctAnswer = getBalanced(num);
  return cons(num, correctAnswer.toString());
};

export default () => commonFlow(rules, balanceGameQuestionGenerator);
