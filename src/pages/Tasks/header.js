import React, { PureComponent } from 'react';
import HeaderNB from '../../components/Header';
import { Right, Button, Text } from "native-base";


export default class Header extends PureComponent {
    handleNew = () => {
        this.props.history.push('/tasks/new');
    }
    renderRight = (props) => (
        <Right>
            <Button onPress={props.onPress}>
                <Text>Nuevo</Text>
            </Button>
        </Right>
    )
    render() {
        const { props } = this;
        return (
            <HeaderNB hasTabs right={() => <this.renderRight  {...props} onPress={this.handleNew} />} />
        )
    }
}