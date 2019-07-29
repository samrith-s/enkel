import { ReactNode } from 'react';

export interface ContainerProps {
    children?: ReactNode;
    component?: Function;
    isFluid?: boolean | false;
}
