import React from 'react';
import { Flex } from 'enkel-ui';

import AsFixture from '../../AsFixture';

const divStyle = backgroundColor => ({
    backgroundColor,
    width: 50,
    height: 50,
    margin: 5,
    border: '1px solid lightgray',
    borderRadius: 5
});

export default (
    <AsFixture
        fixture={Flex}
        display="flex"
        shrink=""
        wrap=""
        order=""
        flow=""
        direction=""
        basis=""
        flex=""
        alignItems=""
        alignContent=""
        justifyContent=""
    >
        This is a flex box. You can play around with the props, to see these
        boxes being moved around:
        <div style={divStyle('palevioletred')} />
        <div style={divStyle('papayawhip')} />
        <div style={divStyle('tomato')} />
        <div style={divStyle('beige')} />
        <div style={divStyle('goldenrod')} />
        <div style={divStyle('slategray')} />
    </AsFixture>
);
