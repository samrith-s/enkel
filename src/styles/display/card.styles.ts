import styled from 'styled';
import { lighten } from 'polished';

import {
    CardStyleProps,
    CardTitleStyleProps
} from 'interfaces/display/card.interface';

export const CardStyle = styled.div<CardStyleProps>`
    display: flex;
    flex-flow: column;
    background: ${({ theme: { colors } }) => colors.light};
    border: 1px solid ${({ theme: { colors } }) => lighten(0.5, colors.darken)}
    border-radius: ${({ theme: { variables } }) => variables.borderRadius};
`;

export const CardTitleStyle = styled.div<CardTitleStyleProps>`
    text-align: left;
`;

export const CardBodyStyle = styled.div<CardTitleStyleProps>`
    text-align: left;
`;

export const CardFooterStyle = styled.div<CardTitleStyleProps>`
    text-align: left;
`;
