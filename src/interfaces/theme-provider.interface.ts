import { Component, ReactNode } from 'react';
import { CSSObject } from 'styled-components';

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
    margin: string | number;
    padding: string | number;
    borderRadius: string | number;
    maxWidth: string | number;
    baseFontSize: string | number;
    [key: string]: string | number;
}

export interface ThemeProviderInterface extends ThemeInterface {
    globalStyles?: CSSObject;
    globalStylesAs?: typeof Component;
    includeFont?: boolean;
    children: ReactNode;
}

export interface GlobalStylesProps {
    custom?: CSSObject;
    includeFont?: boolean;
}
