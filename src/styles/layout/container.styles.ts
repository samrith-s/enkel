import styled from 'styled';
import { ContainerStyleProps } from 'interfaces/display/container.interface';

export const ContainerStyle = styled.main<ContainerStyleProps>`
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
