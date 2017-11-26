import React from 'react'
import { NativeRouter, Route, Link } from 'react-router-native';
import { Container, Text } from 'native-base';
import Login from '../../pages/Login';
import Register from '../../pages/Register';  

const App = () => (
    <NativeRouter>
        <Container>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Container>
    </NativeRouter>
);

export default App;