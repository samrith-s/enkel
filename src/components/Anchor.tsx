import { FunctionComponent } from 'react';

import { AnchorProps } from 'interfaces/anchor.interface';

import RenderAppropriate from 'internals/RenderAppropriate';
import { AnchorComponent } from 'styles/anchor.styles';

export const Anchor: FunctionComponent<AnchorProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(AnchorComponent, rest, children, Component);
