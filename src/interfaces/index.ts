import { FunctionComponent, ReactComponentElement } from 'react';

export interface EnkelComponent<T> extends FunctionComponent<T> {
    Style: ReactComponentElement;
}
