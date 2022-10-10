const cesarCipher = (plaintext, key) => {
  const shift = (char) => {
    let asciiCode = char.charCodeAt(0);
    asciiCode = (asciiCode + key) % 26;
    return String.fromCharCode(asciiCode);
  };
  let cipher = "";
  let textList = plaintext.split("");
  textList.forEach((c) => {
    const asci = c.charCodeAt(0);

    if (asci > 96 && asci < 123) cipher += shift(c);
    else if (asci > 65 && asci < 90) cipher += shift(c.toLowerCase());
    else cipher += c;
  });

  return cipher;
};