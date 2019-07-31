import React, { FunctionComponent } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled';

import { ThemeProviderInterface } from 'interfaces/theme-provider.interface';

import { theme } from 'defaults/theme';

import { GlobalStyles } from 'lib/GlobalStyles';

export const ThemeProvider: FunctionComponent<ThemeProviderInterface> = ({
    colors,
    variables,
    globalStyles: CustomGlobalStyles,
    children
}) => {
    const GlobalStylesComponent = CustomGlobalStyles || GlobalStyles;

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
                <GlobalStylesComponent />
                {children}
            </>
        </StyledComponentsThemeProvider>
    );
};
