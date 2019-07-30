import React, { Component } from 'react';

import { ThemeProvider, Anchor } from 'enkel-ui';

export default class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider>
                    <>
                        <Anchor>Here is an Anchor!</Anchor>
                    </>
                </ThemeProvider>
            </div>
        );
    }
}
