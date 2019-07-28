import React, { FunctionComponent } from 'react';

import AnchorProps from './anchor.types';

const Anchor: FunctionComponent<AnchorProps> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <a {...rest}>{children}</a>
    );

export default Anchor;
