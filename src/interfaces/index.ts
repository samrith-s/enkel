import { FunctionComponent, ReactNode } from 'react';

export interface EnkelComponent<T> extends FunctionComponent<T> {
    Style?: ReactNode | EnkelStyleInterface;
}

interface EnkelStyleInterface {
    [type: string]: ReactNode;
}

export interface ComponentCommons {
    children?: ReactNode;
    component?: Function;
}
