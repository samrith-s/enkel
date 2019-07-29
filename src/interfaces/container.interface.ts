import { ReactNode } from 'react';

export interface ContainerProps extends ContainerStyleProps {
    children?: ReactNode;
    component?: Function;
}

export interface ContainerStyleProps {
    isFluid?: boolean | false;
    maxWidth?: string;
    noPadding?: boolean | false;
}
