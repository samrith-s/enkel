import { ReactNode } from 'react';
import { ComponentCommons } from 'interfaces';

export type FlexProps = ComponentCommons & FlexStyleProps;

export interface FlexStyleProps {
    display?: string;
    shrink?: number;
    wrap?: string;
    order?: number;
    flow?: string;
    direction?: string;
    basis?: string;
    flex?: string;
    alignItems?: string;
    alignContent?: string;
    justifyContent?: string;
}
