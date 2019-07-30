import { CardComponent, CardProps } from 'interfaces/display/card.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { CardTitle } from './CardTitle';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

import { CardStyle } from 'styles/display/card.styles';

export const Card: CardComponent<CardProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(CardStyle, rest, children, Component);

Card.Title = CardFooter;
Card.Body = CardBody;
Card.Title = CardTitle;

Card.Style = CardStyle;
