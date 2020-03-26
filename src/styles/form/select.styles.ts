import styled, { css } from "styled";
import { padding, borderRadius, darken } from "polished";

import {
    SelectStyleProps,
    SelectInputStyleProps,
    SelectMenuItemStyleProps,
    SelectIconStyleProps
} from "interfaces/form/select.interface";

export const SelectStyle = styled.div<SelectStyleProps>`
    position: relative;
    display: block;
    cursor: pointer;
`;

export const SelectInputStyle = styled.input<SelectInputStyleProps>`
    width: 100%;
    ${({ theme: { variables } }) =>
        padding(
            +variables.padding,
            +variables.padding * 3.5,
            +variables.padding,
            +variables.padding * 1.5
        )};
    ${({ menuIsOpen, theme: { variables } }) =>
        !menuIsOpen
            ? `border-radius: ${variables.borderRadius}`
            : borderRadius("top", variables.borderRadius)};
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

export const SelectInputWrapper = styled.div`
    position: relative;
    display: block;
`;

export const SelectIcon = styled.span<SelectIconStyleProps>`
    position: absolute;
    top: 2px;
    right: ${({ theme: { variables } }) => +variables.padding * 1.5}px;
    bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 20px;
    color: ${({ theme: { colors }, invert }) =>
        invert ? colors.primary : darken(0.1, colors.light)};
    font-size: 20px;
    line-height: ${({ invert }) => (invert ? 0 : 2)};

    ${props =>
        props.invert &&
        css`
            transform: rotateX(180deg);
        `}
`;

export const SelectMenuStyle = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 999;
    max-height: 250px;
    overflow-y: auto;
    color: ${({ theme: { colors } }) => colors.dark};
    background: ${({ theme: { colors } }) => colors.white};
    border: 1px solid ${({ theme: { colors } }) => darken(0.1, colors.light)};
    border-top: 0;
    ${({ theme: { variables } }) =>
        borderRadius("bottom", variables.borderRadius)};
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
            borderRadius("bottom", variables.borderRadius)};
    }

    &:hover {
        color: ${({ theme: { colors } }) => colors.primary};
        background: ${({ theme: { colors } }) => darken(0.01, colors.white)};
    }
`;
