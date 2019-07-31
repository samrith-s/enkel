import React from 'react';
import { ThemeProvider, AspectRatio } from 'enkel-ui';

function coloredBlock(to, color1, color2) {
    return {
        size: '50%',
        style: {
            margin: '10px auto',
            borderRadius: 5,
            background: `linear-gradient(to ${to}, ${color1}, ${color2})`
        },
        innerStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '40px',
            textShadow: '2px 2px rgba(1,1,1,0.25)'
        }
    };
}

const aspectRatioRenders = [
    {
        ratio: '16:9',
        gradientTo: 'bottom',
        colorFrom: '#ff9a9e',
        colorTo: '#ff9a9e'
    },
    {
        ratio: '9:16',
        gradientTo: 'bottom',
        colorFrom: '#d4fc79',
        colorTo: '#96e6a1'
    },
    {
        ratio: '4:3',
        gradientTo: 'bottom',
        colorFrom: '#f6d365',
        colorTo: '#fda085'
    },
    {
        ratio: '3:4',
        gradientTo: 'bottom',
        colorFrom: '#667eea',
        colorTo: '#764ba2'
    }
];

export default (
    <ThemeProvider>
        {aspectRatioRenders.map(({ ratio, gradientTo, colorFrom, colorTo }) => (
            <AspectRatio
                key={ratio}
                ratio={ratio}
                {...coloredBlock(gradientTo, colorFrom, colorTo)}
            >
                {ratio}
            </AspectRatio>
        ))}
    </ThemeProvider>
);
