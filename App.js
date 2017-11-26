import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src';

export default class _ extends React.PureComponent {
    state = {
        loading: true
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({
            loading: false
        });
    }
    render() {
        const {loading} = this.state;
        return !loading ? <App />: false;
    }
}