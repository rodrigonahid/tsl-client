import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#151519",
    white: "#FAFAFA",
    gray: "#C4C4C4",
    navyBlue: "#1B3953",
    blue: "#265073",
    error: "#F83540",
  },
  animation: {
    pop: `
      animation-duration: 0.3s;
      animation-name: animate-pop;
      animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
    `,
  },
};

const ThemeContext = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeContext;
