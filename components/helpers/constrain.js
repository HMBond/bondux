const constrain = (value, arrayLength) => {
  if (value <= 0) {
    return 0;
  } else if (value >= arrayLength - 1) {
    return arrayLength - 1;
  } else {
    return value;
  }
};

export default constrain;
