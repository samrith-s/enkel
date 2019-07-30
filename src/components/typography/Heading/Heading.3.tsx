import { EnkelComponent } from 'interfaces';
import { HeadingProps } from 'interfaces/typography/heading.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { HeadingThreeStyle } from 'styles/heading.styles';

export const Three: EnkelComponent<HeadingProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(HeadingThreeStyle, rest, children, Component);

Three.Style = HeadingThreeStyle;
