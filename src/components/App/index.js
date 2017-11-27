import React from 'react'
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import { Container, Text } from 'native-base';
import Suscribe from '../../components/Suscribe';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Tasks from '../../pages/Tasks';

const App = (props) => {
    return (
        <Suscribe>
            <NativeRouter>
                <Container>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/" component={Tasks} />
                    </Switch>
                </Container>
            </NativeRouter>
        </Suscribe>
    );
}

export default App;