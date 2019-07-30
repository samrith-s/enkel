import React, { FunctionComponent } from 'react';

import { ParagraphType } from 'interfaces/typography/paragraph.interface';

export const Paragraph: FunctionComponent<ParagraphType> = ({
    children,
    component: Component,
    ...rest
}) =>
    Component ? (
        <Component {...rest}>{children}</Component>
    ) : (
        <div>{children}</div>
    );
