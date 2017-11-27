import React, { PureComponent } from 'react';
import { Container, Tab, Tabs, TabHeading, Text, Icon, Right, Button, Footer, FooterTab } from 'native-base';
import { Route, Switch } from 'react-router-native';
import Header from './header';
import Authorize from '../../components/Authorize';
import List from './list';
import Form from './form';
import Statistics from './statistics';
import Manage from './manage';

const headers = {
    tasks: <TabHeading><Icon name="timer" /><Text>Tareas</Text></TabHeading>,
    statistics: (
        <TabHeading>
            <Icon name="pie" />
            <Text>Estadisticas</Text>
        </TabHeading>
    )
}

export default class Tasks extends PureComponent {
    handleToTasks = () => {
        this.props.history.push("/");
    }
    handleToStatistics = () => {
        this.props.history.push("/statistics");
    }
    render() {
        const { props } = this;
        return (
            <Authorize {...props}>
                <Container>
                    <Header {...props} />
                    <Switch>
                        <Route path="/" component={List} exact />
                        <Route path="/tasks" component={List} exact />
                        <Route path="/tasks/new" component={Form} exact />
                        <Route path="/tasks/:id" component={Manage} exact />
                        <Route path="/statistics" component={Statistics} />
                    </Switch>
                    <Footer>
                        <FooterTab>
                            <Button onPress={this.handleToTasks}>
                                <Icon name="timer" />
                                <Text>Tareas</Text>
                            </Button>
                            <Button onPress={this.handleToStatistics}>
                                <Icon name="pie" />
                                <Text>Estadisticas</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Authorize >
        );
    }
}

