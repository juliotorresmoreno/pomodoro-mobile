import React, { Component } from 'react';
import { Footer as FooterNativeBase, FooterTab, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Header from '../../components/Header';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,
        height: '100%'
    }
});

export default class Footer extends Component {
    handleLogin = () => this.props.history.push('/login');
    handleRegister = () => this.props.history.push('/register');
    render() {
        const tab = this.props.history.location.pathname === '/register';
        return (
            <FooterNativeBase>
                <FooterTab>
                    <Button full disabled={!tab} onPress={this.handleLogin}>
                        <Text>Login</Text>
                    </Button>
                    <Button full disabled={tab} onPress={this.handleRegister}>
                        <Text>Registrate</Text>
                    </Button>
                </FooterTab>
            </FooterNativeBase>
        );
    }
}
