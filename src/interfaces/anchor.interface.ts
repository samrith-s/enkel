import { ReactNode } from 'react';

export interface AnchorProps {
    children?: ReactNode;
    component?: Function;
    href: string;
    title: string;
    alt: string;
    target?: string;
    rel?: string | 'noopener noreferrer';
}
