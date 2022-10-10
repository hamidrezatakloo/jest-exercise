import cesarCipher from "./cesarCipher";

test("shift with key 10", () => {
  expect(cesarCipher("lol", 10)).toEqual("vyv");
});

test("plaintext with white space return cipher with white space", () => {
  expect(cesarCipher("attack on titan", 4)).toEqual("exxego sr xmxer");
});

test("UpperCase plaintext return lowerCase cipher", () => {
  expect(cesarCipher("MISTSURY", 6)).toEqual("soyzyaxe");
});

test("none alphabet character return same", () => {
  expect(cesarCipher("%@$@", 6)).toEqual("%@$@");
});
