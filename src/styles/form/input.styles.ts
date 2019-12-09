import styled from "styled";
import { darken, padding } from "polished";

export const InputStyle = styled.input`
    display: inline-flex;
    align-items: center;
    width: 100%;
    min-height: 45px;
    ${({ theme: { variables } }) =>
        padding(+variables.padding, +variables.padding * 1.5)};
    font-size: inherit;
    background: ${({ theme: { colors } }) => colors.white};
    border: 1px solid ${({ theme: { colors } }) => darken(0.1, colors.light)};
    border-radius: ${({ theme: { variables } }) => variables.borderRadius};
    outline: 0;
    transition: all 0.25s ease;

    &:hover,
    &:focus {
        border: 1px solid ${({ theme: { colors } }) => colors.primary};
    }

    &[type="color"] {
        ${({ theme: { variables } }) => variables.padding};
    }
`;
