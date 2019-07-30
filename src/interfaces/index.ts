import { FunctionComponent, ReactComponentElement, ReactNode } from 'react';

export interface EnkelComponent<T> extends FunctionComponent<T> {
    Style: ReactComponentElement;
}

export interface ComponentCommons {
    children?: ReactNode;
    component?: Function;
}
