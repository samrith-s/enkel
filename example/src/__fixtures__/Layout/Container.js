import React from 'react';
import { Container } from 'enkel-ui';

import AsFixture from '../../AsFixture';

export default (
    <AsFixture
        fixture={Container}
        isFluid={false}
        noPadding={false}
        maxWidth="100%"
    >
        This is a container. You can play around with the props, and pass custom
        styles!
    </AsFixture>
);
