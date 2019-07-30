import React, { FunctionComponent } from 'react';

import { SelectType } from 'interfaces/form/select.interface';

export const Select: FunctionComponent<SelectType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );