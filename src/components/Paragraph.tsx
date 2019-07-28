import React, { FunctionComponent } from 'react';

import ParagraphType from 'interfaces/paragraph.interface';

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
