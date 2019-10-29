export const theme = {
  colors: {
    bg: "#ffffff",
    primary: "#4A4A4A",
    accent: "#FF9800",
    grey: "#3A3A3A",
    lightGrey: "#E1E1E1",
    offWhite: "#EDEDED",
    lighten: "rgba(255,255,255,0.2)"
  },
  maxWidth: "40rem",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

export const devMode = ({ colors: { bg, grey, lightGrey }, ...rest }) => ({
  colors: {
    primary: bg,
    bg: "#1a1a1a",
    accent: "lime",
    grey: lightGrey,
    lightGrey: grey,
    offWhite: "#111",
    lighten: "rgba(0,0,0,0.2)"
  },
  ...rest
});
