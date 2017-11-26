import React from 'react'
import { NativeRouter, Route, Link } from 'react-router-native';
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
                    <Route path="/" component={Tasks} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/tasks" component={Tasks} />
                </Container>
            </NativeRouter>
        </Suscribe>
    );
}

export default App;