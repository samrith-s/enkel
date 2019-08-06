import React from 'react';
import { stripUnit } from 'polished';

import { EnkelComponent } from 'interfaces';
import { AspectRatioProps } from 'interfaces/display/aspect-ratio.interface';

import {
    AspectRatioContainer,
    AspectRatioWrapper,
    AspectRatioInner
} from 'styles/display/aspect-ratio.styles';

import { getAspectRatio } from 'utils/getAspectRatio';

export const AspectRatio: EnkelComponent<AspectRatioProps> = ({
    ratio = '16:9',
    size = '100',
    children,
    innerStyle,
    ...rest
}): JSX.Element => {
    const [width, unit] = stripUnit(size, true);
    const ratioSize = getAspectRatio(ratio);

    return (
        <AspectRatioContainer {...rest} width={width + (unit || '%')}>
            <AspectRatioWrapper height={ratioSize + '%'}>
                <AspectRatioInner style={innerStyle}>
                    {children}
                </AspectRatioInner>
            </AspectRatioWrapper>
        </AspectRatioContainer>
    );
};
