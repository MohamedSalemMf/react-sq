import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import Home from './Components/Home/Home';

class App extends Component {
    state = { }

    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Redirect from="/" exact to="/Home" />
                </Switch>
            </>
        );
    }
}

export default App;