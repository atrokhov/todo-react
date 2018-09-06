import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as taskActions from '../../src/actions/tasks.js'
import * as taskTypes from '../../src/reducers/tasks.js'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('must add task', () => {
    fetchMock
      .post('/tasks', { body: { task: 'do something' }, headers: { 'content-type': 'application/json' } })

    const expectedActions = [
      { type: taskTypes.ADD_TASK, body: { task: 'do something' } }
    ]
    const store = mockStore({ tasks: [] })

    function callback(data) {
      return store.dispatch(taskActions.addTask('do something')).then(() => {
      // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
        done();
      })
    }
  })

  it('must done task', () => {
    fetchMock
      .post('/tasks', { body: { task: {id: 99, text: 'do something'} }, headers: { 'content-type': 'application/json' } })

    fetchMock
      .patch('/tasks/99', { body: { done: true }, headers: { 'content-type': 'application/json' } })

    const expectedActions = [
      { type: taskTypes.UPDATE_TASK, body: { done: true } }
    ]
    const store = mockStore({ tasks: [] })

    function callback(data) {
      return store.dispatch(taskActions.updateTask(99, true)).then(() => {
      // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
        done();
      })
    }
  })
})