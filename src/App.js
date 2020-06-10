import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from './containers/Login';
import ListUsers from './containers/ListUsers';
import UserDetail from './containers/UserDetail';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router history={createBrowserHistory()}>
                        <Route exact path='/' component={Login} />
                        <Route path='/login' component={Login} />
                        <Route path='/listUsers' component={ListUsers} />
                        <Route path='/userDetail' component={UserDetail} />
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;