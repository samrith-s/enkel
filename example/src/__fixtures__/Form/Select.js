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
    const [value, setValue] = useState(1);
    const [options, setOptions] = useState(SelectOptions);

    const handleChange = value => {
        setValue(value.value);
        setOptions(
            SelectOptions.filter(option => option.value !== value.value)
        );
    };

    return (
        <ThemeProvider>
            <Select
                options={SelectOptions}
                value={value}
                searchable
                onChange={handleChange}
            />
            <Select options={options} searchable defaultValue={0} />
        </ThemeProvider>
    );
}
