import { EnkelComponent } from 'interfaces';

import { CardTitleProps } from 'interfaces/display/card.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { CardTitleStyle } from 'styles/display/card.styles';

export const CardTitle: EnkelComponent<CardTitleProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(CardTitleStyle, rest, children, Component);

CardTitle.Style = CardTitleStyle;
