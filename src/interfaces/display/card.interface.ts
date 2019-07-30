import { ReactNode } from 'react';
import { ComponentCommons } from 'interfaces';

export type CardProps = ComponentCommons & ContainerStyleProps;

export interface CardStyleProps {
    isFluid?: boolean | false;
    maxWidth?: string;
    noPadding?: boolean | false;
}
