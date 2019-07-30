import { EnkelComponent } from 'interfaces';

import { CardProps } from 'interfaces/display/card.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { ContainerStyle } from 'styles/layout/container.styles';

export const Card: EnkelComponent<CardProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(ContainerStyle, rest, children, Component);

Card.Style = ContainerStyle;
