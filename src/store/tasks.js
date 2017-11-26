import {
    fetch,
    secure
} from '../util';
import config from '../config';

const api = {
    register: `${config.protocol}://${config.server}/tasks/new`
}

const actions = {
    load: '@tasks/attempLogin',
    attempRegister: '@tasks/attempRegister'
}

export const actionsCreator = {
    attempRegister: () => ({
        type: actions.attempRegister
    }),
    register: (data) => (dispatch, getState) => {
        const { token } = getState().auth.session;
        dispatch(actionsCreator.attempRegister());
        return new Promise((resolve, reject) => {
            fetch(`${api.register}?token=${token}`, {
                method: 'PUT',
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