import React, { Component } from 'react'
import { connect } from "react-redux";
import { WebSocket } from '../../util';
import { store } from '../../store';
import config from '../../config';

const mapProps = (state) => ({
    token: state.auth.session ? state.auth.session.token : ''
});

class Suscribe extends Component {
    intent = 0;
    componentDidMount() {
        this.open();
    }
    componentDidUpdate() {
        if (this.conn)
            return;
        this.open();
    }
    componentWillUnmount() {
        if (this.conn)
            this.conn.close();
    }
    open = () => {
        const state = store.getState();
        const token = state.auth.session ? state.auth.session.token: '';
        if (this.props.token === '')
            return;
        const url = `${config.protocolWS}://${config.server}/ws?token=${token}`;
        const conn = new WebSocket(url);
        conn.onopen = () => {
            console.log('Connection open');
            this.intent = 0;
        }
        conn.onmessage = (message) => {
            store.dispatch(JSON.stringify(message.data));
        }
        conn.onclose = () => {
            this.intent = this.intent + 1;
            setTimeout(this.open, 3000);
        }
        this.conn = conn;
    }
    render() {
        const { children } = this.props;
        return children;
    }
}

export default connect(mapProps)(Suscribe);