import React, { FunctionComponent } from 'react';

import FlexType from 'interfaces/flex.interface';

const Flex: FunctionComponent<FlexType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );

export default Flex;
