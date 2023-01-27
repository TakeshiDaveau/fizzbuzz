import {
  isMultipleOfFive,
  isMultipleOfThree,
  isMultipleOfThreeAndFive,
} from './math';

describe('Math', () => {
  describe('isMultipleOfThree', () => {
    it('should return true when the number in arg is a multiple of 3', () => {
      expect(isMultipleOfThree(3)).toBe(true);
      expect(isMultipleOfThree(9)).toBe(true);
      expect(isMultipleOfThree(30)).toBe(true);
      expect(isMultipleOfThree(0)).toBe(true);
    });
    it('should return false when the number in arg is not a multiple of 3', () => {
      expect(isMultipleOfThree(1)).toBe(false);
      expect(isMultipleOfThree(2)).toBe(false);
      expect(isMultipleOfThree(10)).toBe(false);
    });
  });
  describe('isMultipleOfFive', () => {
    it('should return true when the number in arg is a multiple of 5', () => {
      expect(isMultipleOfFive(5)).toBe(true);
      expect(isMultipleOfFive(25)).toBe(true);
      expect(isMultipleOfFive(50)).toBe(true);
      expect(isMultipleOfFive(0)).toBe(true);
    });
    it('should return false when the number in arg is not a multiple of 5', () => {
      expect(isMultipleOfFive(1)).toBe(false);
      expect(isMultipleOfFive(2)).toBe(false);
      expect(isMultipleOfFive(11)).toBe(false);
    });
  });
  describe('isMultipleOfThreeAndFive', () => {
    it('should return true when the number in arg is a multiple of 3 and 5', () => {
      expect(isMultipleOfThreeAndFive(15)).toBe(true);
      expect(isMultipleOfThreeAndFive(30)).toBe(true);
      expect(isMultipleOfThreeAndFive(90)).toBe(true);
      expect(isMultipleOfThreeAndFive(0)).toBe(true);
    });
    it('should return false when the number in arg is neither a multiple of 3 nor a multiple of 5', () => {
      expect(isMultipleOfThreeAndFive(5)).toBe(false);
      expect(isMultipleOfThreeAndFive(3)).toBe(false);
      expect(isMultipleOfThreeAndFive(11)).toBe(false);
    });
  });
});
