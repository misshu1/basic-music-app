import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { green } from 'theme';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
    box-sizing: border-box;
}

html {
    height: 100%;
    font-size: 16px;
}

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: ${green[1]};
}

#root {
    width: 100%;
    height: 100%;
}

#modal {
    z-index: 200;
    position: relative;
    user-select: none;
}
`;
