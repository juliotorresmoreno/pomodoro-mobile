import React, { PureComponent } from 'react';
import HeaderNB from '../../components/Header';
import { Right, Button, Text } from "native-base";
import { Route } from "react-router-native";


export default class Header extends PureComponent {
    handleNew = () => {
        this.props.history.push('/tasks/new');
    }
    renderNew = (props) => (
        <Right>
            <Button onPress={this.handleNew}>
                <Text>Nuevo</Text>
            </Button>
        </Right>
    )
    handleBack = () => {
        this.props.history.push('/tasks');
    }
    renderBack = (props) => (
        <Right>
            <Button onPress={this.handleBack}>
                <Text>Regresar</Text>
            </Button>
        </Right>
    )
    renderRight = (props) => [
        <Route key={0} path="/" component={() => <this.renderNew {...props} />} exact />,
        <Route key={1} path="/tasks" component={() => <this.renderNew {...props} />} exact />,
        <Route key={2} path="/tasks/:any" component={() => <this.renderBack {...props} />} exact />
    ]
    render() {
        const { props } = this;
        return (
            <HeaderNB hasTabs right={() => <this.renderRight  {...props} />} />
        )
    }
}