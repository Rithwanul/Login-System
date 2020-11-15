import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";

import Nav from './Nav.js';

function Example() {
    return (

        <Router>
            <>
                <Nav />
                <Switch>

                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
