import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from './containers/Dashboard';
import NoteDetail from './containers/NoteDetail';
import AddNote from './containers/AddNote';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router history={createBrowserHistory()}>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/noteDetail' component={NoteDetail} />
                        <Route path='/addNote' component={AddNote} />
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;