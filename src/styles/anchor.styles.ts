import styled from 'styled';

export const AnchorStyle = styled.a`
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px dotted transparent;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        border-color: ${({ theme: { colors } }) => colors.primary};
    }
`;
