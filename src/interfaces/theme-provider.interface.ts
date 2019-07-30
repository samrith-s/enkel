import { ReactElement, ReactComponentElement } from 'react';

export interface ThemeInterface {
    colors: ThemeColorsInterface;
    variables: ThemeVariablesInterface;
}

export interface ThemeColorsInterface {
    dark: string;
    light: string;
    primary: string;
    secondary: string;
    green: string;
    blue: string;
    yellow: string;
    orange: string;
    red: string;
    [key: string]: string;
}
export interface ThemeVariablesInterface {
    margin?: string;
    padding?: string;
    borderRadius?: string;
    maxWidth?: string;
    baseFontSize?: string;
    [key: string]: string;
}

export interface ThemeProviderInterface extends ThemeInterface {
    globalStyles?: ReactComponentElement;
    children: ReactElement;
}
