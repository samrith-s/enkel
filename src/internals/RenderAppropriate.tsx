import React, { ReactElement, ReactNode } from 'react';

export default function RenderAppropriate(
    DefaultComponent: Function,
    props: Object,
    children: ReactNode | ReactElement,
    AsComponent?: Function
): JSX.Element {
    const Component = AsComponent || DefaultComponent;

    return <Component {...props}>{children}</Component>;
}
