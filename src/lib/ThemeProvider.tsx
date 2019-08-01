import React, { FunctionComponent, Component } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled';

import { ThemeProviderInterface } from 'interfaces/theme-provider.interface';

import { theme } from 'defaults/theme';

import { GlobalStyles } from 'lib/GlobalStyles';

export const ThemeProvider: FunctionComponent<ThemeProviderInterface> = ({
    colors,
    variables,
    globalStylesAs,
    globalStyles,
    children
}) => {
    const GlobalStylesComponent: typeof Component =
        globalStylesAs || GlobalStyles;

    return (
        <StyledComponentsThemeProvider
            theme={{
                colors: {
                    ...theme.colors,
                    ...colors
                },
                variables: {
                    ...theme.variables,
                    ...variables
                }
            }}
        >
            <>
                <GlobalStylesComponent custom={globalStyles} />
                {children}
            </>
        </StyledComponentsThemeProvider>
    );
};
