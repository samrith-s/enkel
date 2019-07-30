import { EnkelComponent } from 'interfaces';
import { HeadingProps } from 'interfaces/heading.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { HeadingOneStyle } from 'styles/heading.styles';

export const One: EnkelComponent<HeadingProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(HeadingOneStyle, rest, children, Component);

One.Style = HeadingOneStyle;
