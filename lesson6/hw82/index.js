let bubbleSort = inputArr => {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};
