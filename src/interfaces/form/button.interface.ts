import { ComponentCommons } from "interfaces";

export interface ButtonInterface {
    type?: string;
    alignItems?: string;
    justifyContent?: string;
    height?: string;
    width?: string;
    rounded?: boolean;
    borderRadius?: string;
}

export type ButtonProps = ComponentCommons & ButtonInterface;
