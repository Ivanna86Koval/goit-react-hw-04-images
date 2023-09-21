import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const RootStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);
  transition: opacity 250ms linear;
   .body:hover::before {
  opacity: 1;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;
