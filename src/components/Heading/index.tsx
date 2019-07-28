import React, { FunctionComponent } from 'react';

import HeadingType from './heading.types';

const Heading: FunctionComponent<HeadingType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );

export default Heading;
