import { EnkelComponent } from 'interfaces';

import { ContainerProps } from 'interfaces/container.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { ContainerStyle } from 'styles/container.styles';

export const Container: EnkelComponent<ContainerProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(ContainerStyle, rest, children, Component);

Container.Style = ContainerStyle;
