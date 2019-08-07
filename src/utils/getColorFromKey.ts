interface ColorFromKeyInterface {
    color: string;
    background: string;
}

export function getColorFromKey(key?: string): ColorFromKeyInterface {
    let color = 'white';
    let background = 'primary';

    switch (key) {
        case 'success': {
            background = 'green';
            break;
        }

        case 'info': {
            background = 'blue';
            break;
        }

        case 'warning': {
            background = 'yellow';
            break;
        }

        case 'danger': {
            background = 'red';
            break;
        }

        case 'dark': {
            background = 'dark';
            break;
        }

        case 'light': {
            background = 'light';
            color = 'dark';
            break;
        }
    }

    return {
        color,
        background
    };
}
