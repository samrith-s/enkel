import styled from 'styled';
import { FlexStyleProps } from 'interfaces/flex.interface';

export const FlexStyle = styled.div<FlexStyleProps>`
    display: ${({ display }) => display || 'flex'};
    ${({ order }) => order && `order: ${order}`};
    ${({ shrink }) => shrink && `flex-shrink: ${shrink}`};
    ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
    ${({ basis }) => basis && `flex-basis: ${basis}`};
    ${({ flow }) => flow && `flex-flow: ${flow}`};
    ${({ direction }) => direction && `flex-direction: ${direction}`};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
    ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent}`};
`;
