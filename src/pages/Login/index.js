import React, { Component } from 'react';
import {
    Container,
    Content,
    Button,
    Text,
    Form,
    Item,
    Input,
    View
} from 'native-base';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

export default class Login extends Component {
    handleRegister = () => this.props.history.push('/register');
    render() {
        const {props} = this;
        return (
            <Container>
                <Header />
                <View style={styles.content}>
                    <Content>
                        <Form>
                            <Item>
                                <Input placeholder="Usuario" />
                            </Item>
                            <Item last>
                                <Input placeholder="Contraseña" last />
                            </Item>
                        </Form>
                        <Button style={{ width: '100%' }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>Entrar</Text>
                        </Button>
                    </Content>
                </View>
                <Footer {...props} />
            </Container>
        );
    }
}
