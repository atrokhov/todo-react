import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import ToDo from "./components/ToDo";
import NotFound from "./components/NotFound";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import toDoApp from "./reducers";
import thunk from "redux-thunk";

let store = createStore(toDoApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ToDo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;