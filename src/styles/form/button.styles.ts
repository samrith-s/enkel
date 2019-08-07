import styled from 'styled';
import { padding, darken } from 'polished';

import { ButtonInterface } from 'interfaces/form/button.interface';
import { getColorFromKey } from 'utils/getColorFromKey';

export const ButtonStyle = styled.button<ButtonInterface>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    height: 34px;
    ${({ theme: { variables } }) => padding(0, +variables.padding * 1.5)}
    ${({ type, theme: { colors } }) => {
        const { color, background } = getColorFromKey(type);

        return `
            color: ${colors[color]};
            background: ${colors[background]};
            border: 1px solid ${darken(0.05, colors[background])};
            
            &:hover, &:active {
                background: ${darken(0.15, colors[background])};
                border: 1px solid ${darken(0.2, colors[background])};
            }
        `;
    }};
    font-size: inherit;
    border-radius: ${({ theme: { variables } }) => variables.borderRadius};
    outline: 0;
    cursor: pointer;
    transition: all 0.25s ease;
`;
