export const addTask = text => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    return fetch("/api/tasks/", {headers, method: "POST", body})
      .then(res => res.json())
      .then(task => {
        return dispatch({
          type: 'ADD_TASK',
          task
        })
      })
  }
}

export const updateTask = (index, done) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({done, });
    let taskId = getState().tasks[index].id;

    return fetch(`/api/done/${taskId}/`, {headers, method: "PATCH", body})
      .then(res => res.json())
      .then(task => {
        return dispatch({
          type: 'UPDATE_TASK',
          task,
          index
        })
      })
  }
}

export const fetchTasks = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/tasks/", {headers, })
      .then(res => res.json())
      .then(tasks => {
        return dispatch({
          type: 'FETCH_TASKS',
          tasks
        })
      })
  }
}