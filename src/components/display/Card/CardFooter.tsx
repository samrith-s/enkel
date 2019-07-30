import { EnkelComponent } from 'interfaces';

import { CardFooterProps } from 'interfaces/display/card.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { CardFooterStyle } from 'styles/display/card.styles';

export const CardFooter: EnkelComponent<CardFooterProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(CardFooterStyle, rest, children, Component);

CardFooter.Style = CardFooterStyle;
