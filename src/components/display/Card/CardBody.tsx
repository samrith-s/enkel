import { EnkelComponent } from 'interfaces';

import { CardBodyProps } from 'interfaces/display/card.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { CardBodyStyle } from 'styles/display/card.styles';

export const CardBody: EnkelComponent<CardBodyProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(CardBodyStyle, rest, children, Component);

CardBody.Style = CardBodyStyle;
