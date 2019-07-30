import { EnkelComponent } from 'interfaces';

import { CardProps } from 'interfaces/layout/container.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { ContainerStyle } from 'styles/layout/container.styles';

export const Container: EnkelComponent<ContainerProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(ContainerStyle, rest, children, Component);

Container.Style = ContainerStyle;
