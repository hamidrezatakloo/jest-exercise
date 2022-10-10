const cesarCipher = (plaintext, key) => {
  const shift = (char) => {
    let asciiCode = char.charCodeAt(0) - 96;
    asciiCode = (asciiCode + key) % 26;
    asciiCode += 96;
    if (asciiCode === 96) asciiCode = 122;
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

export default cesarCipher;
