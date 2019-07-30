import { ReactNode } from 'react';
import { ComponentCommons } from 'interfaces';

export type ContainerProps = ComponentCommons & ContainerStyleProps;

export interface ContainerStyleProps {
    isFluid?: boolean | false;
    maxWidth?: string;
    noPadding?: boolean | false;
}
