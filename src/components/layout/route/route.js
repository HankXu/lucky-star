import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom';
import ROUTE from '../../../routeConfig';

function ConfigedRoute(props) {
    const configs = props.config;
    return configs.map(config => {
        if (config.exact) {
            return <Route key={config.path} exact path={config.path} component={config.component}/>
        } else {
            return <Route key={config.path} path={config.path} component={config.component}/>
        }
    });
}

class AppRoute extends Component {

    render() {
        return (
            <div className='container'>
                <Switch>
                    <ConfigedRoute config={ROUTE}></ConfigedRoute>
                </Switch>
            </div>
        )
    }
}

export default AppRoute;