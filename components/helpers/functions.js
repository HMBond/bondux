export const makeSlug = (string) => {
  return string.toLocaleLowerCase().replace(' ', '-');
};

export const hexToRGBA = (hex, opacity) => {
  return (
    'rgba(' +
    (hex = hex.replace('#', ''))
      .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .concat(opacity || 1)
      .join(',') +
    ')'
  );
};
