import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

const calcGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return calcGCD(number2, number1 % number2);
};

const generateQuestionData = () => {
  const number1 = getRandomInteger(1, maxNumber);
  const number2 = getRandomInteger(1, maxNumber);
  const correctAnswer = calcGCD(number1, number2);

  return {
    question: `${number1} ${number2}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainGCDGame = () => {
  runGame(gameDescription, generateQuestionData);
};

export default runBrainGCDGame;
