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
  background: linear-gradient(315deg,rgba(101,0,94,.7) 3%,rgba(60,132,206,.7) 38%,rgba(48,238,226,.7) 68%,rgba(255,25,25,.7) 98%);
    animation: gradient 15s ease infinite;
  background-size: 400% 400%;
    background-attachment: fixed;
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
