import {
    fetch,
    secure
} from '../util';
import config from '../config';

const api = {
    login: `${config.protocol}://${config.server}/auth/login`,
    register: `${config.protocol}://${config.server}/auth/register`
}

const actions = {
    attempLogin: '@auth/attempLogin',
    attempRegister: '@auth/attempRegister',
    setSession: '@auth/setSession',
}

export const actionsCreator = {
    attempLogin: () => ({
        type: actions.attempLogin
    }),
    setSession: (session) => ({
        type: actions.setSession,
        session: session
    }),
    login: (data) => (dispatch) => {
        dispatch(actionsCreator.attempLogin());
        return new Promise((resolve, reject) => {
            console.log(api.login)
            fetch(api.login, {
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
                            dispatch(actionsCreator.setSession(data.session));
                            secure(resolve)(response);
                        });
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
                            dispatch(actionsCreator.setSession(data.session));
                            secure(resolve)(response);
                        });
                })
                .catch((err) => {
                    secure(reject)(err);
                })
        })
    }
}

const defaultState = {
    session: false,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.setSession:
            return { ...state, session: action.session };
        default:
            return state;
    }
}