import { EnkelComponent } from 'interfaces';

import { FlexProps } from 'interfaces/display/flex.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { FlexStyle } from 'styles/layout/flex.styles';

export const Flex: EnkelComponent<FlexProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(FlexStyle, rest, children, Component);

Flex.Style = FlexStyle;
