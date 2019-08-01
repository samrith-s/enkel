import { createGlobalStyle } from 'styled';
import { GlobalStylesProps } from 'interfaces/theme-provider.interface';

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap');

    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        color: ${({ theme: { colors } }) => colors.dark};
        font-size: ${({ theme: { variables } }) => variables.baseFontSize};
        font-family: 'Nanum Gothic', Arial, Helvetica, sans-serif;
        background: ${({ theme: { colors } }) => colors.light};
    }

    * {
        box-sizing: border-box;
    }

    ${({ custom }) => custom};
`;
