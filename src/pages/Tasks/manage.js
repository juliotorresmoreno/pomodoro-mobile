import React, { PureComponent } from 'react';
import { Text, Content, Form as FormNB, Item, Input, Button, View, Label } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actionsCreator } from '../../store/tasks';
import moment from "moment";

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
    tasks: state.tasks.data
});

class Manage extends PureComponent {
    state = {
        name: ""
    }
    componentDidMount() {
        const { state } = this.props.location;
        this.setState(state);
    }
    componentWillReceiveProps(props) {
        const { state } = props.location;
        console.log(props, state);
        const found = this.props.tasks.find((v) => {
            if (v.id === state.id) {
                return true;
            }
        })
        console.log(found);
        this.setState(state);
    }
    handleChangeText = (name) => (value) => {
        this.setState({
            [name]: value
        });
    }
    handleStart = () => {
        this.props.start({ id: this.state.id })
            .then(() => {
                this.props.history.push("/");
            })
            .catch((error) => {
                //console.log('error:', error);
            });
    }
    handleStop = () => {
        this.props.stop({ id: this.state.id })
            .then(() => {
                this.props.history.push("/");
            })
            .catch((error) => {
                //console.log('error:', error);
            });
    }
    handleDelete = () => {
        this.props.delete({ id: this.state.id })
            .then(() => {
                this.props.history.push("/");
            })
            .catch((error) => {
                //console.log('error:', error);
            });
    }
    renderButtons = () => {
        return (
            this.state.status === 'wait' ?
                <Button onPress={this.handleStart} style={{ width: '100%', marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', width: '100%' }}>
                        Iniciar tarea
                    </Text>
                </Button> :
                this.state.status === 'running' ?
                    <Button onPress={this.handleStop} style={{ width: '100%', marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', width: '100%' }}>
                            Detener tarea
                        </Text>
                    </Button> :
                    this.state.status === 'completed' ?
                        <Button disabled style={{ width: '100%', marginTop: 10 }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>
                                Iniciar tarea
                            </Text>
                        </Button> :
                        false
        );
    }
    render() {
        const { props } = this;
        const { name, step, start_date, end_date, status } = this.state;
        return (
            <View style={styles.content}>
                <Content>
                    <FormNB>
                        <Item floatingLabel last>
                            <Label>Nombre</Label>
                            <Input value={name} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Paso</Label>
                            <Input value={step + ''} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Fecha/Hora de inicio</Label>
                            <Input value={moment(start_date).format("Y/m/d H:i:s")} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Fecha/Hora de fin</Label>
                            <Input value={moment(end_date).format("Y/m/d H:i:s")} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Status</Label>
                            <Input value={status} />
                        </Item>
                        <this.renderButtons />
                        {/*<Button danger onPress={this.handleDelete} style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>
                                Eliminar tarea
                            </Text>
                        </Button>*/}
                    </FormNB>
                </Content>
            </View>
        );
    }
}

export default connect(mapProps, actionsCreator)(Manage);