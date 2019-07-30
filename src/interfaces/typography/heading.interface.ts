import { ReactNode } from 'react';
import { ComponentCommons } from 'interfaces';

export type HeadingProps = ComponentCommons & HeadingStyleProps;

export interface HeadingStyleProps {
    noMargin?: boolean | false;
    noPadding?: boolean | false;
}
