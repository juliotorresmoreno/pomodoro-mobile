import { combineReducers } from 'redux';
import auth from './auth';
import tasks from './tasks';
import messages from './messages';

export default combineReducers({
    auth, tasks, messages
});