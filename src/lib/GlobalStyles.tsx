import { createGlobalStyle } from 'styled';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap');

    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        color: ${({ theme: { colors } }) => colors.dark};
        font-family: 'Nanum Gothic', Arial, Helvetica, sans-serif;
        background: ${({ theme: { colors } }) => colors.light};
        font-size: ${({ theme: { variables } }) => variables.baseFontSize};
    }

    * {
        box-sizing: border-box;
    }
`;
