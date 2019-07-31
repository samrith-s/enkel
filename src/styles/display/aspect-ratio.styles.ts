import styled from 'styled';

import {
    AspectRatioStyleProps,
    AspectRatioWrapperStyleProps
} from 'interfaces/display/aspect-ratio.interface';

export const AspectRatioContainer = styled.div<AspectRatioStyleProps>`
    width: ${props => props.width};
`;

export const AspectRatioWrapper = styled.div<AspectRatioWrapperStyleProps>`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: ${props => props.height};
`;

export const AspectRatioInner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
