const analyzeArray = (array) => {
  const length = array.length;
  if (length == 0) return "error";
  let average =
    array.reduce((sum, number) => {
      return sum + number;
    }) / length;
  average = Math.floor(average);

  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
