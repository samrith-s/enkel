import React from 'react';
import { ThemeProvider } from 'enkel-ui';

export default function AsFixture({ fixture: Fixture, children, ...rest }) {
    return (
        <ThemeProvider>
            <Fixture {...rest}>{children}</Fixture>
        </ThemeProvider>
    );
}
