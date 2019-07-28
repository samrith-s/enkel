import React, { FunctionComponent } from 'react';

import HeadingType from 'interfaces/heading.interface';

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
