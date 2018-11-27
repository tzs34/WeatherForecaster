import {
  capitalize,
  addTwoDPZero,
  getCountryCurrency
} from "../utils/app-utils";

test("capitalize should uppercase first letter of word", () => {
  expect(capitalize("word")).toBe("Word");
});

test("addTwoDPZero should add two zeros to the end of a number", () => {
  expect(addTwoDPZero(10)).toBe("10.00");
});

test("getCountryCurrency should add corrcetd currency sign to amount", () => {
  expect(getCountryCurrency(10, "GB")).toBe("£10.00");
});
