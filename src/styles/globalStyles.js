import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
    }

    .banner {
        background: ${({theme}) => theme.banner};
    }

    .anchor, a {
        color: ${({theme}) => theme.text}
    }

    .grid-container::after {
        background: ${({theme}) => theme.text}
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    banner: 'linear-gradient(to bottom, #fff 10%, #0c0e29 100%)',
    counter: '#0c0e29',
}

export const darkTheme = {
    banner: 'linear-gradient(to bottom, #000000 10%, #0c0e29 100%)',
    text: '#fff',
    body: '#0c0e29',
    counter: '#0c0e29'
}