import React, { FunctionComponent } from 'react';

import FlexType from './flex.types';

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
