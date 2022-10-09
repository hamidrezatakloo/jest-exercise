import { add, sub, divide, multiply } from "./calculator";

test("sum two number", () => {
  expect(add(2, 4).toBe(6));
});

test("sum with floating number", () => {
  expect(add(2, 4.2).toBeCloseTo(6.2));
});

test("sub two number", () => {
  expect(sub(2, 4.2).toBe(-2.2));
});

test("divide two number", () => {
  expect(divide(8, 2).toBe(4));
});

test("divide in zero throw error", () => {
  expect(divide(8, 0).toMatch(/error/));
});

test("multiply two number", () => {
  expect(multiply(2, 2).toBe(4));
});
