import { combineReducers } from 'redux';
import tasks from "./tasks";


const toDoApp = combineReducers({
  tasks,
})

export default toDoApp;