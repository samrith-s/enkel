import { EnkelComponent } from 'interfaces';

import { FlexProps } from 'interfaces/flex.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { FlexStyle } from 'styles/flex.styles';

export const Flex: EnkelComponent<FlexProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(FlexStyle, rest, children, Component);

Flex.Style = FlexStyle;
