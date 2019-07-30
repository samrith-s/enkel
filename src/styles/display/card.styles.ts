import styled from 'styled';
import { CardStyleProps } from 'interfaces/layout/card.interface';

export const CardStyle = styled.div<ContainerStyleProps>`
    display: block;
    width: 100%;
    max-width: ${({
        isFluid,
        maxWidth,
        theme: {
            variables: { maxWidth: themeMaxWidth }
        }
    }) => (isFluid ? 'none' : maxWidth || themeMaxWidth)};
    margin: 0 auto;
    padding: ${({ noPadding, theme: { variables } }) =>
        noPadding ? 0 : variables.padding};
`;
