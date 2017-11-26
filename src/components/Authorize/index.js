import React from 'react'
import {
    connect
} from "react-redux";
import { Route, NativeRouter } from 'react-router-native';
import Login from '../../pages/Login';

const mapProps = (state) => ({
    session: state.auth.session
});

class Authorize extends Route {
    static defaultProps = {
        children: false
    }
    render() {
        const {
            session, exact, path,
            children, ...rest
        } = this.props;
        if (session !== false) {
            return React.Children.map(children, child =>
                React.cloneElement(
                    child, { ...rest, session: session }
                ));
        }
        return <Login {...rest } />;
    }
}

export default connect(mapProps)(Authorize);