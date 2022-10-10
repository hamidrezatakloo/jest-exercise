test("shift with key 10 ", () => {
  expect(cesarCipher("lol", 10)).toEqual("vyv");
});

test("plaintext with white space ", () => {
  expect(cesarCipher("attack on titan", 4)).toEqual("exxego sr xmxer");
});
