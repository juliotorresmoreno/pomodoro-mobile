import React, { PureComponent } from 'react';
import { Text } from 'native-base';

export default class List extends PureComponent {
    render() {
        const { props } = this;
        return (
            <Text>List</Text>
        );
    }
}