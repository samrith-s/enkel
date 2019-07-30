import { ReactNode } from 'react';

export interface FlexProps extends FlexStyleProps {
    children?: ReactNode;
    component?: Function;
}

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
