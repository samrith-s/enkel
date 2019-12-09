import React from 'react';
import { ThemeProvider, Button } from 'enkel-ui';

export default (
    <ThemeProvider>
        <div style={{ padding: 10 }}>
            <Button>Default</Button>
            <Button type="success">Success</Button>
            <Button type="info">Info</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
            <Button type="light">Light</Button>
            <Button type="dark">Dark</Button>
        </div>
    </ThemeProvider>
);
