import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have Your name? ');
  console.log(`Hello, ${userName}!`);
};
