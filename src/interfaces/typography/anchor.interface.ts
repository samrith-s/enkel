import { ReactNode } from 'react';
import { ComponentCommons } from 'interfaces';

export type AnchorProps = ComponentCommons & {
    href: string;
    title: string;
    alt: string;
    target?: string;
    rel?: string;
};
