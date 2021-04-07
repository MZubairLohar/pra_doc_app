import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Home } from '@material-ui/icons';
import { Search} from '../index'
const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' element={ <Home /> } />
                <Route exact path='/search' element={<Search />} />
            </Switch>
        </div>
    )
}

export default AppRouter
