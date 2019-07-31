import { FunctionComponent, ReactNode } from 'react';

export interface EnkelComponent<T> extends FunctionComponent<T> {
    Style?: ReactNode;
}

export interface ComponentCommons {
    children?: ReactNode;
    component?: Function;
}
