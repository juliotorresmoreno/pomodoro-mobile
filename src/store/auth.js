import {
    fetch,
    secure
} from '../util';
import config from '../config';

const api = {
    register: `${config.protocol}://${config.server}/auth/register`
}

const actions = {
    attempLogin: '@auth/attempLogin'
}

export const actionsCreator = {
    attempLogin: () => ({
        type: actions.attempLogin
    }),
    login: (data) => (dispatch) => {
        dispatch(actionsCreator.attempLogin());
        return new Promise((resolve, reject) => {
            fetch(api.register, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then((response) => response.json())
                .then((response) => {
                    secure(resolve)(err);
                })
                .catch((err) => {
                    secure(reject)(err);
                })
        });
    },
    attempRegister: () => ({
        type: actions.attempLogin
    }),
    register: (data) => (dispatch) => {
        dispatch(actionsCreator.attempRegister());
        console.log(api.register, data);
        return new Promise((resolve, reject) => {
            fetch(api.register, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then((response) => {
                    return response.json()
                        .then((data) => {
                            if (!response.ok)
                                throw new Error(data.message);
                            console.log('info:', response);
                            secure(resolve)(response);
                        });
                })
                .catch((err) => {
                    secure(reject)(err);
                })
        })
    }
}

export default (state = {}, action) => {
    return state;
}