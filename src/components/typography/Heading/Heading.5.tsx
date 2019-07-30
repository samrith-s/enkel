import { EnkelComponent } from 'interfaces';
import { HeadingProps } from 'interfaces/typography/heading.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { HeadingFiveStyle } from 'styles/typography/heading.styles';

export const Five: EnkelComponent<HeadingProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(HeadingFiveStyle, rest, children, Component);

Five.Style = HeadingFiveStyle;
