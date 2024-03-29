import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, Search} from '../index'
const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/search'>
                <Search />
            </Route>
        </Switch>
    )
}

export default AppRouter
