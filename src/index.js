import readlineSync from 'readline-sync';

export default () => {
  let userName = readlineSync.question('May I have Your name? ');
  console.log('Hello, ' + userName + '!');
};
