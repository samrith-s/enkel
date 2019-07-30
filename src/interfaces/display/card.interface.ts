import { ReactNode } from 'react';
import { ComponentCommons, EnkelComponent } from 'interfaces';

export interface CardComponent extends EnkelComponent {
    Title: ReactNode;
    Body: ReactNode;
    Footer: ReactNode;
}

export type CardProps = ComponentCommons & CardStyleProps & {};

export interface CardStyleProps {
    isFluid?: boolean;
    maxWidth?: string;
    noPadding?: boolean;
}

export interface CardTitleStyleProps {
    isSmall?: boolean;
}
