test("shift with key 10 ", () => {
  expect(cesarCipher("lol", 10)).toEqual("vyv");
});

test("plaintext with white space ", () => {
  expect(cesarCipher("attack on titan", 4)).toEqual("exxego sr xmxer");
});

test("UpperCase plaintext ", () => {
  expect(cesarCipher("MISTSURY", 6)).toEqual("qmwxwyvc");
});
