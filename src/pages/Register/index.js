import React, { PureComponent } from 'react';
import {
    Container, Content, Button,
    Text, Form, Item, Input,
    View, Label
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

class Register extends PureComponent {
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
        this.props.register(this.state)
            .then(() => {
                this.props.history.push("/");
            })
            .catch((error) => {
                //console.log('error:', error);
            });
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
                            <Item floatingLabel>
                                <Label>Nombres</Label>
                                <Input
                                    value={name} 
                                    onChangeText={this.handleChangeText('name')} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Apellidos</Label>
                                <Input
                                    name="lastname" value={lastname}
                                    onChangeText={this.handleChangeText('lastname')} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Usuario</Label>
                                <Input
                                    name="username" value={username}
                                    onChangeText={this.handleChangeText('username')} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Contraseña</Label>
                                <Input
                                    secureTextEntry value={password}
                                    onChangeText={this.handleChangeText('password')} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Confirmar contraseña</Label>
                                <Input
                                    last secureTextEntry
                                    value={password_confirmation}
                                    onChangeText={this.handleChangeText('password_confirmation')} />
                            </Item>
                            <Button onPress={this.handleRegister} style={{ width: '100%' }}>
                                <Text style={{ textAlign: 'center', width: '100%' }}>Registrate</Text>
                            </Button>
                        </Form>
                    </Content>
                </View>
                <Footer {...props} />
            </Container>
        );
    }
}

export default connect(mapProps, actionsCreator)(Register);