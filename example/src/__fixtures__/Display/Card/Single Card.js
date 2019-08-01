import React from 'react';
import { css } from 'styled-components';
import { lighten } from 'polished';
import { ThemeProvider, Card } from 'enkel-ui';

const globalStyle = css`
    html,
    body,
    #root {
        background: ${props => props.theme.colors.secondary};
    }

    #root {
        display: flex;
        flex-wrap: wrap;
    }
`;

function renderCards(COUNT) {
    const cards = [];

    while (COUNT) {
        cards.push(
            <Card
                key={`card-${COUNT}`}
                style={{
                    background: lighten(0.05, '#21002d'),
                    border: 'none',
                    color: '#fefefe'
                }}
            >
                <Card.Title>C'est de la titre du card</Card.Title>
                <Card.Body>C'est du content du card.</Card.Body>
                <Card.Footer>This is the footer of the card!</Card.Footer>
            </Card>
        );
        COUNT--;
    }

    return cards;
}

export default (
    <ThemeProvider globalStyles={globalStyle}>{renderCards(10)}</ThemeProvider>
);
