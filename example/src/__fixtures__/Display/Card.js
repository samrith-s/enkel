import React from 'react';
import { ThemeProvider, Card } from 'enkel-ui';

export default (
    <ThemeProvider>
        <Card>
            <Card.Title>C'est de la titre du card</Card.Title>
            <Card.Body>C'est du content du card.</Card.Body>
            <Card.Footer>This is the footer of the card!</Card.Footer>
        </Card>
    </ThemeProvider>
);
