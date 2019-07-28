import React, { FunctionComponent } from 'react';

import ParagraphType from './paragraph.types';

const Paragraph: FunctionComponent<ParagraphType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );

export default Paragraph;
