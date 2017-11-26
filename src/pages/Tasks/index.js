import React, { PureComponent } from 'react';
import { Container, Tab, Tabs, TabHeading, Text, Icon, Right, Button } from 'native-base';
import { Route } from 'react-router-native';
import Header from './header';
import Authorize from '../../components/Authorize';
import List from './list';
import Form from './form';

const headers = {
    tasks: <TabHeading><Icon name="timer" /><Text>Tareas</Text></TabHeading>,
    statistics: <TabHeading><Icon name="pie" /><Text>Estadisticas</Text></TabHeading>
}

export default class Tasks extends PureComponent {
    render() {
        const { props } = this;
        return (
            <Authorize {...props}>
                <Container>
                    <Header {...props} />
                    <Tabs tabBarPosition="bottom">
                        <Tab heading={headers.tasks}>
                            <Route path="/" component={List} exact />
                            <Route path="/tasks" component={List} exact />
                            <Route path="/tasks/new" component={Form} exact />
                        </Tab>
                        <Tab heading={headers.statistics}>
                            <Text>Estadisticas</Text>
                        </Tab>
                    </Tabs>
                </Container>
            </Authorize >
        );
    }
}