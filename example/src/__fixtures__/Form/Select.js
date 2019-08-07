import React from 'react';
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

export default (
    <ThemeProvider>
        <Select options={SelectOptions} value={SelectOptions[0]} />
    </ThemeProvider>
);
