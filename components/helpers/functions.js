export const constrain = (value, arrayLength) => {
  if (value <= 0) {
    return 0;
  } else if (value >= arrayLength - 1) {
    return arrayLength - 1;
  } else {
    return value;
  }
};

export const arrange = array => {
  return array.sort((a, b) => {
    return parseFloat(b.progress) - parseFloat(a.progress);
  });
};

export const makeHash = string => {
  return string.toLocaleLowerCase().replace(" ", "-");
};
