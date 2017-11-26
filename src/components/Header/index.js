import React, { Component } from 'react';
import {
    Header as HeaderNB,
    Title,
    Button,
    Body,
    Icon, Text
} from 'native-base';

const Header = ({ right: Right = () => false }) => {
    return (
        <HeaderNB>
            <Body>
                <Title>Pomoro</Title>
            </Body>
            <Right />
        </HeaderNB>
    );
}

export default Header;