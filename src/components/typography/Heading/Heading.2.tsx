import { EnkelComponent } from 'interfaces';
import { HeadingProps } from 'interfaces/typography/heading.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { HeadingTwoStyle } from 'styles/typography/heading.styles';

export const Two: EnkelComponent<HeadingProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(HeadingTwoStyle, rest, children, Component);

Two.Style = HeadingTwoStyle;
