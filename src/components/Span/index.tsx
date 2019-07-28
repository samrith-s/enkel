import React, { FunctionComponent } from 'react';

import SpanType from './span.types';

const Span: FunctionComponent<SpanType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );

export default Span;
