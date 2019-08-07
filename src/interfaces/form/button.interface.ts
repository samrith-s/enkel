import { ComponentCommons } from 'interfaces';

export interface ButtonInterface {
    type?: string;
    alignItems?: string;
    justifyContent?: string;
}

export type ButtonProps = ComponentCommons & ButtonInterface;
