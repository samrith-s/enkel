import { EnkelComponent } from 'interfaces';
import { HeadingProps } from 'interfaces/typography/heading.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { HeadingFourStyle } from 'styles/heading.styles';

export const Four: EnkelComponent<HeadingProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(HeadingFourStyle, rest, children, Component);

Four.Style = HeadingFourStyle;
