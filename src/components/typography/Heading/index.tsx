import { One } from './Heading.1';
import { Two } from './Heading.2';
import { Three } from './Heading.3';
import { Four } from './Heading.4';
import { Five } from './Heading.5';
import { Six } from './Heading.6';

import { groupDisplayName } from 'utils';

const applyDisplayName = groupDisplayName('Heading');

export const Heading = {
    One: applyDisplayName(One),
    Two: applyDisplayName(Two),
    Three: applyDisplayName(Three),
    Four: applyDisplayName(Four),
    Five: applyDisplayName(Five),
    Six: applyDisplayName(Six)
};
