import React, { FunctionComponent } from 'react';

import { HeadingType } from 'interfaces/heading.interface';

export const Heading: FunctionComponent<HeadingType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );
