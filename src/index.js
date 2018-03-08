import readlineSync from 'readline-sync';

export default (rules) => {
  console.log('Welcome to Brain Games!');
  if (rules) {
    console.log(`${rules}\n`);
  }
  const userName = readlineSync.question('May I have Your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};
