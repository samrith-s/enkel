import React, { Component } from 'react';

import { ThemeProvider, Form } from 'enkel-ui';

import GlobalStyle from './styles';

export default class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider
                    colors={{
                        dark: '#fff'
                    }}
                >
                    <>
                        <GlobalStyle />
                        <Form>Here is a Span!</Form>
                    </>
                </ThemeProvider>
            </div>
        );
    }
}
