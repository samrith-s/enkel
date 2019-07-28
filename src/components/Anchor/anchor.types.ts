import { ReactNode } from 'react';

type AnchorProps = {
    children?: ReactNode;
    component?: Function;
    href: string;
    title: string;
    alt: string;
    target?: string;
    rel?: string | 'noopener noreferrer';
};

export default AnchorProps;
