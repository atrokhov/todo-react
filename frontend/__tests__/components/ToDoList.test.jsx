import React from "react";
import ToDo from "../../src/components/ToDo";
import { ReduxStore } from "react-redux";
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<ToDo>', () => {
  it('renders a text', () => {
    const store = mockStore();

    fetchMock.post('/tasks', { body: { id: 99, text: 'Hello!!!' }, headers: { 'content-type': 'application/json' } })

    const root = mount(<ToDo id={99} store={store} />);

    expect(root.find('td')).toEqual('Hello!!!');
  });
});