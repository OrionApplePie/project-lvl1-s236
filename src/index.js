import readlineSync from 'readline-sync';

export default () => {
  let readlineSync = require('readline-sync');
  let userName = readlineSync.question('May I have Your name? ');
  console.log('Hello, ' + userName + '!');
};
