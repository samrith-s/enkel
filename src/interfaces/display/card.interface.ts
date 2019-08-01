import { ReactNode } from 'react';
import { EnkelComponent, ComponentCommons } from 'interfaces';

export interface CardComponent<T> extends EnkelComponent<T> {
    Title: ReactNode;
    Body: ReactNode;
    Footer: ReactNode;
}

export type CardProps = ComponentCommons &
    CardStyleProps & {
        style?: string;
    };

export type CardTitleProps = CardProps;

export type CardBodyProps = CardProps;

export type CardFooterProps = CardProps;

export interface CardStyleProps {
    isFluid?: boolean;
    maxWidth?: string;
    noPadding?: boolean;
}

export interface CardTitleStyleProps {
    vAlign?: string;
    hAlign?: string;
}

export interface CardFooterStyleProps {
    vAlign?: string;
    hAlign?: string;
}
