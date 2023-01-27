import {
  isMultipleOfFive,
  isMultipleOfThree,
  isMultipleOfThreeAndFive,
} from './math';

type NumberString = string; // todo reduce to '1' to '100'
type FizzBuzzType = NumberString | 'Fizz' | 'Buzz' | 'FizzBuzz';

// More readable
export const fizzBuzzReadable = (): FizzBuzzType[] => {
  const result: FizzBuzzType[] = [];
  for (let i = 1; i <= 100; i++) {
    if (isMultipleOfThreeAndFive(i)) {
      result.push('FizzBuzz');
      continue;
    }
    if (isMultipleOfFive(i)) {
      result.push('Buzz');
      continue;
    }
    if (isMultipleOfThree(i)) {
      result.push('Fizz');
      continue;
    }
    result.push(i.toString());
  }
  return result;
};

export const fizzBuzzReadableAlternative = (): FizzBuzzType[] => {
  const result: FizzBuzzType[] = [];
  for (let i = 1; i <= 100; i++) {
    const isFizz = isMultipleOfThree(i);
    const isBuzz = isMultipleOfFive(i);
    if (isFizz && isBuzz) {
      result.push('FizzBuzz');
      continue;
    }
    if (isBuzz) {
      result.push('Buzz');
      continue;
    }
    if (isFizz) {
      result.push('Fizz');
      continue;
    }
    result.push(i.toString());
  }
  return result;
};

// Compressed
const convertToFizzBuzzValue = (value: number): FizzBuzzType => {
  if (isMultipleOfThreeAndFive(value)) {
    return 'FizzBuzz';
  }
  if (isMultipleOfFive(value)) {
    return 'Buzz';
  }
  if (isMultipleOfThree(value)) {
    return 'Fizz';
  }
  return value.toString();
};

export const fizzBuzzCompact = (): FizzBuzzType[] => {
  return Array(100)
    .fill(undefined)
    .map((v, i) => convertToFizzBuzzValue(i + 1));
};

// Extra Compressed
export const fizzBuzzExtraCompact = (): FizzBuzzType[] => {
  return Array(100)
    .fill(undefined)
    .map((v, index) =>
      (index + 1) % 3 === 0 && (index + 1) % 5 === 0
        ? 'FizzBuzz'
        : (index + 1) % 3 === 0
        ? 'Fizz'
        : (index + 1) % 5 === 0
        ? 'Buzz'
        : (index + 1).toString()
    );
};

// Extra Compressed
export const fizzBuzzExtraCompactOptimized = (): FizzBuzzType[] => {
  let value: number;
  let isBuzz: boolean;
  let isFizz: boolean;
  return Array(100)
    .fill(undefined)
    .map((v, index) =>
      (value = index + 1) &&
      (isFizz = value % 3 === 0) &&
      (isBuzz = value % 5 === 0) &&
      isBuzz &&
      isFizz
        ? 'FizzBuzz'
        : isFizz
        ? 'Fizz'
        : value % 5 === 0
        ? 'Buzz'
        : value.toString()
    );
};

// ---------
// STAGE 2
// ---------
type FizzBuzzStage2Type =
  | FizzBuzzType
  | 'FizzBuzzBuzz'
  | 'FizzBuzzFizz'
  | 'FizzBuzzFizzBuzz';

export const fizzBuzzStage2 = (): FizzBuzzStage2Type[] => {
  const result: FizzBuzzStage2Type[] = [];
  for (let i = 1; i <= 100; i++) {
    let valueToDisplay: FizzBuzzStage2Type = '';
    let isFizz = isMultipleOfThree(i);
    let isBuzz = isMultipleOfFive(i);
    if (isFizz && isBuzz) {
      valueToDisplay += 'FizzBuzz';
    } else if (isBuzz) {
      valueToDisplay += 'Buzz';
    } else if (isFizz) {
      valueToDisplay += 'Fizz';
    }

    isFizz = i.toString().includes('3');
    isBuzz = i.toString().includes('5');
    if (isFizz && isBuzz) {
      valueToDisplay += 'FizzBuzz';
    } else if (isBuzz) {
      valueToDisplay += 'Buzz';
    } else if (isFizz) {
      valueToDisplay += 'Fizz';
    }

    result.push(valueToDisplay === '' ? i.toString() : valueToDisplay);
  }
  return result;
};
