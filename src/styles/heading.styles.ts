import styled, { css } from 'styled';
import { darken, lighten } from 'polished';
import { HeadingStyleProps } from 'interfaces/heading.interface';

const BaseHeadingStyles = css<HeadingStyleProps>`
    margin: ${({ noMargin, theme: { variables } }) =>
            noMargin ? 0 : variables.margin}
        0;
    padding: 0 0
        ${({ noPadding, theme: { variables } }) =>
            noPadding ? 0 : variables.padding};
    color: ${({ theme: { colors } }) => colors.dark};
    transition: all 0.5s ease;
`;

export const HeadingOneStyle = styled.h1<HeadingStyleProps>`
    ${BaseHeadingStyles}
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: 2rem;
    border-bottom: 1px dotted ${({ theme: { colors } }) =>
        darken(0.25, colors.light)};
`;

export const HeadingTwoStyle = styled.h2<HeadingStyleProps>`
    ${BaseHeadingStyles}
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: 1.6rem;
`;

export const HeadingThreeStyle = styled.h3<HeadingStyleProps>`
    ${BaseHeadingStyles}
    font-size: 1.4rem;
    border-bottom: 1px dotted
        ${({ theme: { colors } }) => lighten(0.75, colors.dark)};
`;

export const HeadingFourStyle = styled.h4<HeadingStyleProps>`
    ${BaseHeadingStyles}
    font-size: 1.2rem;
`;

export const HeadingFiveStyle = styled.h5<HeadingStyleProps>`
    ${BaseHeadingStyles}
    font-size: 1rem;
`;

export const HeadingSixStyle = styled.h6<HeadingStyleProps>`
    ${BaseHeadingStyles}
    font-size: 0.8rem;
`;
