import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './store';
import moment from "moment";

export default class _ extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}