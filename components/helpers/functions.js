export const clientSideRender = () => {
  return typeof window !== "undefined" && window.document ? true : false;
};

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

export const makeSlug = string => {
  return string.toLocaleLowerCase().replace(" ", "-");
};

export const hexToRGBA = (hex, opacity) => {
  return (
    "rgba(" +
    (hex = hex.replace("#", ""))
      .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
      .map(function(l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .concat(opacity || 1)
      .join(",") +
    ")"
  );
};
