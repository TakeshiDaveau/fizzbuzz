export const isMultipleOfThree = (value: number): boolean => value % 3 === 0;
export const isMultipleOfFive = (value: number): boolean => value % 5 === 0;
export const isMultipleOfThreeAndFive = (value: number): boolean =>
  isMultipleOfThree(value) && isMultipleOfFive(value);
