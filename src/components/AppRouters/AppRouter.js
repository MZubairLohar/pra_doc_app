import { Home } from '@material-ui/icons';
import React from 'react';
import { Route} from 'react-router-dom';
import { Search} from '../index'
const AppRouter = () => {
    return (
        <div>
           
                <Route exact path='/' element={ <Home /> } />
                <Route exact path='/search' element={<Search />} />
           
        </div>
    )
}

export default AppRouter
