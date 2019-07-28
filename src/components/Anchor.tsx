import React, { FunctionComponent } from 'react';

import AnchorProps from 'interfaces/anchor.interface';

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
