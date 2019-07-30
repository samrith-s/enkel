import { EnkelComponent } from 'interfaces';
import { HeadingProps } from 'interfaces/typography/heading.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { HeadingSixStyle } from 'styles/typography/heading.styles';

export const Six: EnkelComponent<HeadingProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(HeadingSixStyle, rest, children, Component);

Six.Style = HeadingSixStyle;
