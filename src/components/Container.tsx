import React, { FunctionComponent } from 'react';

import ContainerType from 'interfaces/container.interface';

const Container: FunctionComponent<ContainerType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );

export default Container;
