import React, { FunctionComponent } from 'react';

import SelectType from 'interfaces/select.interface';

const Select: FunctionComponent<SelectType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );

export default Select;