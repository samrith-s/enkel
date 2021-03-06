import styled, { css } from "styled";
import { padding, darken } from "polished";

import { ButtonInterface } from "interfaces/form/button.interface";
import { getColorFromKey } from "utils/getColorFromKey";

export const ButtonStyle = styled.button<ButtonInterface>`
    display: inline-flex;
    align-items: ${({ alignItems }) => alignItems || "center"};
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
    height: ${({ height }) => height || "34px"};
    ${({ width }) =>
        width &&
        css`
            width: ${width};
        `};
    ${({ theme: { variables } }) => padding(0, +variables.padding * 1.5)}
    ${({ type, theme: { colors } }) => {
        const { color, background } = getColorFromKey(type);

        return css`
            color: ${colors[color]};
            background: ${colors[background]};

            &:hover,
            &:active {
                background: ${darken(0.15, colors[background])};
            }
        `;
    }};
    font-size: inherit;
    border: 0;
    border-radius: ${({ rounded, borderRadius, theme: { variables } }) =>
        rounded ? "50%" : borderRadius || variables.borderRadius};
    outline: 0;
    cursor: pointer;
    transition: all 0.25s ease;
`;
