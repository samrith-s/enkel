import styled from 'styled';
import { lighten, margin, padding } from 'polished';

import {
    CardStyleProps,
    CardTitleStyleProps,
    CardFooterStyleProps
} from 'interfaces/display/card.interface';

export const CardStyle = styled.div<CardStyleProps>`
    display: flex;
    flex-flow: column;
    ${({ isFluid, maxWidth }) => !isFluid && `width: ${maxWidth || '350px'}`};
    ${({ theme: { variables } }) => margin(variables.margin)};
    ${({ noPadding, theme: { variables } }) =>
        !noPadding && padding(variables.padding)};
    background: ${({ theme: { colors } }) => colors.light};
    border: 1px solid ${({ theme: { colors } }) => lighten(0.8, colors.dark)};
    border-radius: ${({ theme: { variables } }) => variables.borderRadius};
`;

export const CardTitleStyle = styled.div<CardTitleStyleProps>`
    display: flex;
    flex-shrink: 0;
    align-items: ${({ vAlign }) => vAlign || 'center'};
    ${({ hAlign }) => hAlign && `justify-content: ${hAlign}`};
    margin: ${({ theme: { variables } }) => margin(0, 0, variables.margin)};
    font-weight: bold;
`;

export const CardBodyStyle = styled.div<CardTitleStyleProps>`
    flex-shrink: 1;
    height: 100%;
`;

export const CardFooterStyle = styled.div<CardFooterStyleProps>`
    display: flex;
    flex-shrink: 0;
    align-items: ${({ vAlign }) => vAlign || 'center'};
    ${({ hAlign }) => hAlign && `justify-content: ${hAlign}`};
    ${({ theme: { variables } }) => margin(variables.margin, 0, 0)};
`;
