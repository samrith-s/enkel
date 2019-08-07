import React, { Component } from 'react';

import { ThemeProvider, Select } from 'enkel-ui';

const SelectOptions = [
    {
        value: 1,
        label: 'Yes'
    },
    {
        value: 0,
        label: 'No'
    }
];

export default class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider>
                    <>
                        <Select options={SelectOptions} />
                    </>
                </ThemeProvider>
            </div>
        );
    }
}
