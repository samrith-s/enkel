import React, { useState } from "react";
import { ThemeProvider, Select } from "enkel-ui";

const SelectOptions = [
    {
        value: 1,
        label: "Yes"
    },
    {
        value: 0,
        label: "No"
    }
];

export default function MyComponent() {
    const [options, setOptions] = useState(SelectOptions);

    const handleChange = value => {
        setOptions(
            SelectOptions.filter(option => option.value !== value.value)
        );
    };

    return (
        <ThemeProvider>
            <Select
                options={SelectOptions}
                defaultValue={SelectOptions[0]}
                searchable
                onChange={handleChange}
            />
            <Select options={options} searchable defaultValue={0} />
        </ThemeProvider>
    );
}
