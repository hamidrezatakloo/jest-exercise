const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  if (b == 0) return "error!!!!!!!!!!!!";
  return a / b;
};

const multiply = (a, b) => {
  return a * b;
};

export { add, sub, divide, multiply };
