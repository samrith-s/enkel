import { EnkelComponent } from 'interfaces';
import { AnchorProps } from 'interfaces/anchor.interface';

import RenderAppropriate from 'internals/RenderAppropriate';

import { AnchorStyle } from 'styles/anchor.styles';

export const Anchor: EnkelComponent<AnchorProps> = ({
    children,
    component: Component,
    ...rest
}) => RenderAppropriate(AnchorStyle, rest, children, Component);

Anchor.Style = AnchorStyle;
