const cesarCipher = (plaintext, key) => {
  const shift = (char) => {
    let asciiCode = char.charCodeAt(0);
    asciiCode = (asciiCode + key) % 26;
    return String.fromCharCode(asciiCode);
  };
};
