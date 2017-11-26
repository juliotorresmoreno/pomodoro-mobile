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
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { actionsCreator } from '../../store/auth';

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

class _ extends Component {
    state = {
        name: "julio",
        lastname: "torres",
        username: "jtorres990",
        password: "123456",
        password_confirmation: "123456"
    }
    handleRegister = () => this.props.history.push('/register');
    handleChangeText = (name) => (value) => {
        this.setState({
            [name]: value
        });
    }
    handleRegister = () => {
        console.log("alert");
    }
    render() {
        const { props } = this;
        const { name, lastname, username, password, password_confirmation } = this.state;
        return (
            <Container>
                <Header />
                <View style={styles.content}>
                    <Content>
                        <Form>
                            <Item>
                                <Input
                                    value={name} placeholder="Nombres"
                                    onChangeText={this.handleChangeText('name')} />
                            </Item>
                            <Item>
                                <Input
                                    placeholder="Apellidos"
                                    name="lastname" value={lastname}
                                    onChangeText={this.handleChangeText('lastname')} />
                            </Item>
                            <Item>
                                <Input
                                    placeholder="Usuario"
                                    name="username" value={username}
                                    onChangeText={this.handleChangeText('username')} />
                            </Item>
                            <Item>
                                <Input
                                    secureTextEntry value={password}
                                    placeholder="Contraseña"
                                    onChangeText={this.handleChangeText('password')} />
                            </Item>
                            <Item>
                                <Input
                                    last secureTextEntry
                                    value={password_confirmation}
                                    placeholder="Confirmar contraseña"
                                    onChangeText={this.handleChangeText('password_confirmation')} />
                            </Item>
                        </Form>
                        <Button onPress={this.handleRegister} style={{ width: '100%' }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>Registrate</Text>
                        </Button>
                    </Content>
                </View>
                <Footer {...props} />
            </Container>
        );
    }
}

export default connect(mapProps, actionsCreator)(_);