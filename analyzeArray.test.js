test("min,max,avg,length of 1-10", () => {
  expect(analyzeArray([2, 1, 3, 5, 4, 10, 8, 9, 6, 7])).toEqual({
    average: 5,
    min: 1,
    max: 10,
    length: 10,
  });
});

test("list with repeat number", () => {
  expect(analyzeArray([2, 1, 1, 3, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 5,
  });
});

test("empty array", () => {
  expect(analyzeArray([2, 1, 1, 3, 3])).toMatch(/error/);
});
