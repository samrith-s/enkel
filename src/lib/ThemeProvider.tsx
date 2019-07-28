import React, { FunctionComponent } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { ThemeProviderInterface } from 'interfaces/theme-provider.interface';

import { theme } from 'defaults/theme';

export const ThemeProvider: FunctionComponent<ThemeProviderInterface> = ({
    colors,
    variables,
    children
}) => (
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
        {children}
    </StyledComponentsThemeProvider>
);
