import styled from 'styled';
import { padding, borderRadius, darken } from 'polished';

import {
    SelectStyleProps,
    SelectInputStyleProps,
    SelectMenuItemStyleProps
} from 'interfaces/form/select.interface';

export const SelectStyle = styled.div<SelectStyleProps>`
    position: relative;
    display: block;
    cursor: pointer;
`;

export const SelectInputStyle = styled.input<SelectInputStyleProps>`
    width: 100%;
    ${padding(10, 15)};
    ${({ menuIsOpen, theme: { variables } }) =>
        !menuIsOpen
            ? `border-radius: ${variables.borderRadius}`
            : borderRadius('top', variables.borderRadius)};
    font-size: inherit;
    background: ${({ theme: { colors } }) => colors.white};
    border: 1px solid
        ${({ menuIsOpen, theme: { colors } }) =>
            menuIsOpen ? colors.primary : darken(0.1, colors.light)};
    outline: 0;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover,
    &:focus {
        border: 1px solid ${({ theme: { colors } }) => colors.primary};
    }
`;

export const SelectMenuWrapperStyle = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    max-height: 250px;
    color: ${({ theme: { colors } }) => colors.dark};
    background: ${({ theme: { colors } }) => colors.white};
    border: 1px solid ${({ theme: { colors } }) => darken(0.1, colors.light)};
    border-top: 0;
    ${({ theme: { variables } }) =>
        borderRadius('bottom', variables.borderRadius)};
`;

export const SelectMenuItemStyle = styled.div<SelectMenuItemStyleProps>`
    ${({ theme: { variables } }) => padding(variables.padding)};
    border-bottom: 1px solid
        ${({ theme: { colors } }) => darken(0.025, colors.light)};
    transition: all 0.25s ease;
    ${({ isSelected, isHighlighted, theme: { colors } }) =>
        (isSelected || isHighlighted) &&
        `color: ${darken(0.15, colors.primary)}`};

    &:last-of-type {
        border: 0;
        ${({ theme: { variables } }) =>
            borderRadius('bottom', variables.borderRadius)};
    }

    &:hover {
        color: ${({ theme: { colors } }) => colors.primary};
        background: ${({ theme: { colors } }) => darken(0.01, colors.white)};
    }
`;
