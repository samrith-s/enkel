import { createGlobalStyle } from 'styled';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap');

    html, body {
        width: 100%;
        height: 100%;
        color: ${({ theme: { colors } }) => colors.dark};
        font-family: 'Nanum Gothic', Arial, Helvetica, sans-serif;
        background: ${({ theme: { colors } }) => colors.light};
    }
`;
