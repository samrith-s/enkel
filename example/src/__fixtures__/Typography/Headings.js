import React from 'react';
import { ThemeProvider, Heading } from 'enkel-ui';

export default (
    <ThemeProvider>
        <Heading.One noMargin={false} noPadding={false}>
            Heading 1
        </Heading.One>
        <Heading.Two noMargin={false} noPadding={false}>
            Heading 2
        </Heading.Two>
        <Heading.Three noMargin={false} noPadding={false}>
            Heading 3
        </Heading.Three>
        <Heading.Four noMargin={false} noPadding={false}>
            Heading 4
        </Heading.Four>
        <Heading.Five noMargin={false} noPadding={false}>
            Heading 5
        </Heading.Five>
        <Heading.Six noMargin={false} noPadding={false}>
            Heading 6
        </Heading.Six>
    </ThemeProvider>
);
