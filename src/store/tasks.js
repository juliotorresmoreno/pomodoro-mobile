import {
    fetch,
    secure
} from '../util';
import config from '../config';

const api = {
    list: `${config.protocol}://${config.server}/tasks`,
    stop: `${config.protocol}://${config.server}/tasks/stop`,
    start: `${config.protocol}://${config.server}/tasks/start`,
    delete: `${config.protocol}://${config.server}/tasks`,
    register: `${config.protocol}://${config.server}/tasks/new`,
    statistics: `${config.protocol}://${config.server}/tasks/statistics`
}

const actions = {
    load: '@tasks/attempLogin',
    setList: "@tasks/setList",
    attempList: '@tasks/attempList',
    attempStop: '@tasks/attempStop',
    attempStart: '@tasks/attempStart',
    attempDelete: '@tasks/attempDelete',
    setStatistics: '@tasks/setStatistics',
    attempRegister: '@tasks/attempRegister',
    attempStatistics: '@tasks/attempStatistics'
}

export const actionsCreator = {
    attempList: () => ({
        type: actions.attempList
    }),
    setList: (data) => ({
        type: actions.setList,
        data: data
    }),
    list: () => (dispatch, getState) => {
        const { token } = getState().auth.session;
        dispatch(actionsCreator.attempRegister());
        return new Promise((resolve, reject) => {
            fetch(`${api.list}?token=${token}`, {
                method: 'GET'
            })
                .then((response) => {
                    return response.json()
                        .then((result) => {
                            if (!response.ok)
                                throw new Error(result.message);
                            dispatch(actionsCreator.setList(result.data));
                            secure(resolve)(result);
                        });
                })
                .catch((err) => {
                    secure(reject)(err);
                })
        })
    },
    attempStart: () => ({
        type: actions.attempStart
    }),
    start: (data) => (dispatch, getState) => {
        const { token } = getState().auth.session;
        dispatch(actionsCreator.attempStart());
        return new Promise((resolve, reject) => {
            fetch(`${api.start}?token=${token}`, {
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
                            secure(resolve)(response);
                        });
                })
                .catch((err) => {
                    secure(reject)(err);
                })
        })
    },
    attempStop: () => ({
        type: actions.attempStop
    }),
    stop: (data) => (dispatch, getState) => {
        const { token } = getState().auth.session;
        dispatch(actionsCreator.attempStop());
        return new Promise((resolve, reject) => {
            fetch(`${api.stop}?token=${token}`, {
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
                            secure(resolve)(response);
                        });
                })
                .catch((err) => {
                    secure(reject)(err);
                })
        })
    },
    attempDelete: () => ({
        type: actions.attempDelete
    }),
    delete: (data) => (dispatch, getState) => {
        const { token } = getState().auth.session;
        dispatch(actionsCreator.attempDelete());
        return new Promise((resolve, reject) => {
            fetch(`${api.delete}/${data.id}?token=${token}`, {
                method: 'DELETE'
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
    },
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
    },
    setStatistics: (data) => ({
        type: actions.setStatistics,
        data: data
    }),
    attempStatistics: () => ({
        type: actions.attempStatistics
    }),
    statistics: () => (dispatch, getState) => {
        const { token } = getState().auth.session;
        dispatch(actionsCreator.attempStatistics());
        return new Promise((resolve, reject) => {
            fetch(`${api.statistics}?token=${token}`, {
                method: 'GET'
            })
                .then((response) => {
                    return response.json()
                        .then((data) => {
                            if (!response.ok)
                                throw new Error(data.message);
                            dispatch(actionsCreator.setStatistics([data.data]));
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
    data: [],
    statistics: [
        [{
            "v": 50,
            "name": "wait"
        }, {
            "v": 50,
            "name": "completed"
        }]
    ]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.setStatistics:
            return { ...state, statistics: action.data };
        case actions.setSession:
            return { ...state, session: action.session };
        case actions.setList:
            return { ...state, data: action.data };
        default:
            return state;
    }
}