#!/usr/bin/node

import conversation from '..';
import isEvenGame from '../even';

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = conversation();
isEvenGame(userName);
