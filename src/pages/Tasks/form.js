import React, { PureComponent } from 'react';
import { Text, Content, Form as FormNB, Item, Input, Button, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actionsCreator } from '../../store/tasks';

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

class Form extends PureComponent {
    handleChangeText = (name) => (value) => {
        this.setState({
            [name]: value
        });
    }
    handleRegister = () => {
        this.props.register(this.state)
            .then((result) => {
                console.log(result);
                //this.props.history.push("/");
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }
    render() {
        const { props } = this;
        return (
            <View style={styles.content}>
                <Content>
                    <FormNB>
                        <Item last>
                            <Input placeholder="Nombre" onChangeText={this.handleChangeText("name")} />
                        </Item>
                        <Button onPress={this.handleRegister} style={{ width: '100%', marginTop: 10 }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>
                                Registrar tarea
                            </Text>
                        </Button>
                    </FormNB>
                </Content>
            </View>
        );
    }
}

export default connect(mapProps, actionsCreator)(Form);