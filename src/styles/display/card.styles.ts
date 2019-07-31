import styled from 'styled';
import { lighten, padding } from 'polished';

import {
    CardStyleProps,
    CardTitleStyleProps
} from 'interfaces/display/card.interface';

export const CardStyle = styled.div<CardStyleProps>`
    display: flex;
    flex-flow: column;
    margin: ${({ theme: { variables } }) => variables.margin};
    background: ${({ theme: { colors } }) => colors.light};
    border: 1px solid ${({ theme: { colors } }) => lighten(0.8, colors.dark)}
    border-radius: ${({ theme: { variables } }) => variables.borderRadius};
`;

export const CardTitleStyle = styled.div<CardTitleStyleProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: ${({ align }) => align};
    min-height: 34px;
    margin: 0 0 ${({ theme: { variables } }) => variables.margin};
    padding: ${({ theme: { variables } }) =>
        padding(0, variables.padding, variables.padding)};
    font-weight: bold;
    border-bottom: 1px solid
        ${({ theme: { colors } }) => lighten(0.75, colors.dark)};
`;

export const CardBodyStyle = styled.div<CardTitleStyleProps>`
    flex-shrink: 1;
`;

export const CardFooterStyle = styled.div<CardTitleStyleProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    min-height: 34px;
    margin: ${({ theme: { variables } }) => variables.margin} 0 0;
    padding: ${({ theme: { variables } }) => variables.padding} 0 0;
    border-top: 1px solid
        ${({ theme: { colors } }) => lighten(0.75, colors.dark)};
`;
