import { ReactNode } from 'react';

export interface HeadingProps extends HeadingStyleProps {
    children?: ReactNode;
    component?: Function;
}

export interface HeadingStyleProps {
    noMargin?: boolean | false;
    noPadding?: boolean | false;
}
