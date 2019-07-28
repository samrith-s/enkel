import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Span: FunctionComponent<Props> = ({ children }) => <div>{children}</div>;

export default Span;
