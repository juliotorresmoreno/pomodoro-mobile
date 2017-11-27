import React, { Component } from 'react';
import {
    Container, Content, Button,
    Text, Form, Item, Input,
    View, Label
} from 'native-base';
import { actionsCreator } from '../../store/auth';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
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

const mapProps = (state) => ({

});

class Login extends Component {
    state = {
        username: "jtorres990",
        password: "123456"
    }
    handleRegister = () => this.props.history.push('/register');
    handleChangeText = (name) => (value) => {
        this.setState({
            [name]: value
        });
    }
    handleLogin = () => {
        this.props.login(this.state)
            .then(() => {
                this.props.history.push("/");
            })
            .catch((error) => {
                //console.log('error:', error);
            });
    }
    render() {
        const { props } = this;
        const { username, password } = this.state;
        return (
            <Container>
                <Header />
                <View style={styles.content}>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Usuario</Label>
                                <Input
                                    value={username}
                                    onChangeText={this.handleChangeText('username')} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Contraseña</Label>
                                <Input
                                    secureTextEntry value={password}
                                    onChangeText={this.handleChangeText('password')} />
                            </Item>
                            <Button onPress={this.handleLogin} style={{ width: '100%' }}>
                                <Text style={{ textAlign: 'center', width: '100%' }}>Entrar</Text>
                            </Button>
                        </Form>
                    </Content>
                </View>
                <Footer {...props} />
            </Container>
        );
    }
}

export default connect(mapProps, actionsCreator)(Login);