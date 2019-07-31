import { CardComponent, CardProps } from 'interfaces/display/card.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { CardTitle } from './CardTitle';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

import { groupDisplayName } from 'internals/utils';

import { CardStyle } from 'styles/display/card.styles';

const applyDisplayName = groupDisplayName('Card');

export const Card: CardComponent<CardProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(CardStyle, rest, children, Component);

Card.Title = applyDisplayName(CardTitle);
Card.Body = applyDisplayName(CardBody);
Card.Footer = applyDisplayName(CardFooter);

Card.Style = CardStyle;
