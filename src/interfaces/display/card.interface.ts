import { ReactNode } from 'react';
import { EnkelComponent, ComponentCommons } from 'interfaces';

export interface CardComponent<T> extends EnkelComponent<T> {
    Title: ReactNode;
    Body: ReactNode;
    Footer: ReactNode;
}

export type CardProps = ComponentCommons & CardStyleProps;

export interface CardTitleProps extends CardProps {}
export interface CardBodyProps extends CardProps {}
export interface CardFooterProps extends CardProps {}

export interface CardStyleProps {
    isFluid?: boolean;
    maxWidth?: string;
    noPadding?: boolean;
}

export interface CardTitleStyleProps {
    isSmall?: boolean;
}
