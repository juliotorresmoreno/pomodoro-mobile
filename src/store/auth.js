import {
    fetch,
    secure
} from '../util';
import {
    protocol,
    server
} from '../config';

const api = {
    register: `${protocol}://${server}/auth/register`
}

const actions = {
    attempLogin: '@auth/attempLogin'
}

export const actionsCreator = {
    attempLogin: ({
        type: actions.attempLogin
    }),
    login: (data) => (dispatch) => {
        dispatch(this.attempLogin());
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
    attempRegister: ({
        type: actions.attempLogin
    }),
    register: (data) => (dispatch) => {
        dispatch(this.attempRegister());
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
        })
    }
}

export default (state = {}, action) => {
    return state;
}