const initialState = [];

export default function tasks(state=initialState, action) {
  let taskList = state.slice();

  switch (action.type) {

    case 'ADD_TASK':
      return [...state, action.task];

    case 'UPDATE_TASK':
      let taskToUpdate = taskList[action.index]
      taskToUpdate.done = action.task.done;
      taskList.splice(action.index, 1, taskToUpdate);
      return taskList;

    case 'FETCH_TASKS':
      return [...state, ...action.tasks];

    default:
      return state;
  }
}