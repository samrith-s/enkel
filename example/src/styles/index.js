import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
        background: ${props => props.theme.colors.dark};
    }
`;
