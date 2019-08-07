import React from 'react';
import { ThemeProvider, Heading, Input } from 'enkel-ui';

export default (
    <ThemeProvider>
        <Heading.One>Text</Heading.One>
        <Input placeholder="Text" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="search" placeholder="Search" />

        <Heading.One>Number</Heading.One>
        <Input type="number" placeholder="Number" />
        <Input type="tel" placeholder="Telephone" />

        <Heading.One>Date Time</Heading.One>
        <Input type="date" placeholder="Date" />
        <Input type="datetime-local" placeholder="Date Time Local" />
        <Input type="month" placeholder="Month" />
        <Input type="week" placeholder="Week" />
        <Input type="time" placeholder="Time" />

        <Heading.One>Misc</Heading.One>
        <Input type="color" placeholder="Color" />
        <Input type="file" placeholder="File" />
        <Input type="url" placeholder="URL" />
    </ThemeProvider>
);
