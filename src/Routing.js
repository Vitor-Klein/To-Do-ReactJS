import React from 'react';
import Login from './login';
import ToDo from './App'
import { Route, Link } from 'react-router-dom';

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Route
                    path='/'
                    render={(props) => (                     
                        <Login {...props} username={this.props.username} />
                    )}
                />
                <Route path="ToDo" component={ToDo}/>
            </div>
        )
    }
}

export default Routing;